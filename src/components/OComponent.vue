<template>
  <div>


<div class="card card-body m-4">
    <h3>Forma simples pegar estado (sem mapstate): {{ $store.state.counter }}</h3>
    <h3>Forma simples pegar resultado do metodo (sem mapMutations): </h3>
    <button @click=" $store.commit('increaseConter')">enviar(mutations)</button>
    <h3>Forma simples pegar resultado da action (sem mapActions): </h3>
    <button @click=" $store.dispatch('increaseConter_2')">enviar(actions)</button>
     <h3>Forma simples pegar resultado getters (sem mapGetters): </h3>
    {{ $store.getters.exibeStateSemMutations  }}
    
<!--input type="text" v-model="$store.state.colorCode" placeholder="Enter color code" >
<div :style="{color: $store.state.colorCode}">texto teste</div -->
<input type="text" v-model="colorCode" placeholder="Enter color code" >
<div :style="{color: $store.state.colorCode}">texto teste</div>

    <h3> ############## Usando (mapGetters, mapMutations, mapState ) - Options API + Vuex ############## </h3>
    <h5 class="text-center">{{ counter }} x 2 = {{ times2 }}</h5>
    <button class="btn btn-primary" @click="inc">Increment</button>
  </div>


  </div>

</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['times2']),

    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(newValue){
        //this.$store.commit('setColorCode',newvalue)
         this.$store.dispatch('setColorCode',newValue)
      }
    }
  },
  methods: {
    ...mapMutations(['setCounter']),
    inc() {
      this.setCounter(this.counter + 1)
    }
  }
}
</script>


