import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    counter: 150,
    colorCode: 'green'
  },
  getters: {
    times2(state) {
      return state.counter * 2
    },
    exibeStateSemMutations(state){
      return state.counter * 999999
    }
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value
    },
    setColorCode(state, newvalue){
      state.colorCode = newvalue
    },
    increaseConter(state){
      state.counter--
    },
    increaseConter_2(state, numRandom){
      console.log('numRandom' , numRandom);
      state.counter--
    }
  },
  actions: {
    //faz uma requisicao post antes de executar o metodo e deppois passa
    // cm parametro para a funcao increaseConter_2
     // console.log('entrou na action')
      increaseConter_2({ commit }) 
      {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
       // console.log('response', response)
       commit('increaseConter_2', response.data) //response.data == numRandom
      })
    },
    setColorCode({ commit }, newvalue )
    {
      commit('setColorCode', newvalue)
    }
  }
})