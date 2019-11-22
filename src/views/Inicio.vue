<template>
  <div>
    <h1>Lista de tareas</h1>
    <router-link :to="{name:'agregar'}">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group"> 
      <li v-for="(tarea,index) in tareas" :key="index" class="list-group-item">
        {{tarea.nombre}}
        <div class="float-right">
          <router-link :to="{name:'editar',params:{id:tarea.id}}">
          <button class="btn btn-primary btn-sm">Editar</button>
          </router-link>
          <button @click="eliminarTarea(tarea.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'

export default{

  name:'Inicio',
  computed:{
    ...mapState(['tareas'])
  },
  methods:{
    ...mapActions(['getTareas','eliminarTarea'])
  },
  created(){
    this.getTareas()
  }

}
</script>
