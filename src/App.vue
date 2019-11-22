<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{name:'inicio'}">
      <img src="@/assets/logo.png">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Test from './components/Test'

export default {
  name:'app',
  components:{
    Test
  }
}
</script>
