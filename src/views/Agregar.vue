<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea(nombre)" class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text">Nombre</div>
                </div>
                <input type="text" class="form-control"  v-model="nombre">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Agregar</button>
        </form>
        agregando tarea: {{nombre}}
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'

export default {
    name:'Agregar',
    data(){
        return{
            nombre:""
        }
    },
    computed:{
        ...mapState(['tarea'])
    },
    methods:{
        ...mapActions(['agregarTarea'])
    },
    created(){
    }
}
</script>