<template>
    <div>
        <h1>Edicion</h1>
        <form @submit.prevent="editarTarea(tarea)" class="form-inline">
            <h1>Editando: {{idRecibido}} - {{tarea.nombre}}</h1>
            <input type="text" class="form-control"  v-model="tarea.nombre">
            <button class="btn btn-primary mb-2" type="submit">Editar</button>
        </form>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'

export default {
    name:"Editar",
    data(){
        return{
            idRecibido:this.$route.params.id
        }
    },
    computed:{
    ...mapState(['tarea'])
  },
  methods:{
    ...mapActions(['getTareaSingular','editarTarea'])
  },
  created(){
    this.getTareaSingular(this.idRecibido)
  }
}
</script>