import { createStore } from 'vuex'


const store = createStore({
  state() {
    return {
      count: 10,
      age: 18,
      name: 'leo',
      height: '181cm'
    }
  },
  mutations: {
    inc(state) {
      state.count++
    }
  },
  getters: {
    total(state, getters) {
      return count * state.age
    },
    discount(state, getters) {
      return count * getters.total
    }
  }
})

export default store
