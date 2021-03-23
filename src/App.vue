<template>
  <div class="home">
    <OComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import OComponent from '@/components/OComponent.vue'
export default {
  name: 'Home',
  components: {
    OComponent
  }
}
</script>