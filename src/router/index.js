import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'inicio',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/Inicio.vue')
}, {
    path: '/editar/:id',
    name: 'editar',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/Editar.vue')
}, , {
    path: '/agregar',
    name: 'agregar',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/Agregar.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router