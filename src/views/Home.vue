<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <OComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OComponent from '@/components/OComponent.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,OComponent
  }
}
</script>
