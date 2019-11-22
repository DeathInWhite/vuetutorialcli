import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/components/firebaseInit'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //variables
        tareas: [],
        tarea: { nombre: "", id: "" }
    },
    mutations: { //metodos (Setter)
        setTareas(state, tareas) {
            state.tareas = tareas
        },
        setTarea(state, tarea) {
            state.tarea = tarea
        },
        eliminarTarea(state, id) {
            state.tareas = state.tareas.filter(doc => {
                return doc.id != id
            })
        }
    },
    actions: { //metodos (Getter)
        getTareas({ commit }) {
            const tareas = []
            db.collection('tareas').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.id)
                    //console.log(doc.data())
                    let tarea = doc.data()
                    tarea.id = doc.id
                    tareas.push(tarea)
                })
            })

            commit('setTareas', tareas)
        },
        getTareaSingular({ commit }, id) {
            db.collection('tareas').doc(id).get().then(doc => {
                let tarea = doc.data()
                tarea.id = doc.id
                commit('setTarea', tarea)
            })
        },
        editarTarea({ commit }, tarea) {
            db.collection('tareas').doc(tarea.id).update({
                nombre: tarea.nombre
            }).then(() => {
                router.push({ name: 'inicio' })
            })
        },
        agregarTarea({ commit }, nombre) {
            db.collection('tareas').add({
                nombre: nombre
            }).then(doc => {
                router.push({ name: 'inicio' })
            })
        },
        eliminarTarea({ commit, dispatch }, id) {
            db.collection('tareas').doc(id).delete().then(() => {
                //dispatch('getTareas')
                console.log("Tarea eliminada")
                commit('eliminarTarea', id)
            })
        }
    },
    modules: {}
})