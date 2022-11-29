import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      msg: 'storeMsg',
      name: 'root容器',
      count: 10,
      age: 18,
      sex: true,
      cm: 'cm'
    }
  },
  getters: {
    height(state) {
      return 181 + state.cm
    },
    personMsg(state, getters) {
      return `名字是${state.name}，身高是${getters.height}`
    }
  },
  mutations: {
    incre(state, payload) {
      state.count += payload.n
    },
    decre(state, payload) {
      state.count -= payload.n
    },
    rootActionCommit() {
      console.log('rootActionCommit')
    },
    sonUseFatherMutations() {
      console.log('sonUseFatherMutations')
    },

  },
  actions: {
    timeout() {
      setTimeout(() => {
        console.log('timeout')
      }, 1000)
    },
    rootAction({ state, getters, commit, dispatch }, payload) {
      console.log(state.sex)
      console.log(getters.personMsg)
      console.log(payload.n)
      commit('rootActionCommit')
      dispatch('timeout')
    },
    sonUseFatherActions() {
      console.log('sonUseFatherActions')
    },
    fatherUseSon({ dispatch }) {
      dispatch('sonResponse')
    }

  },
  modules: {
    home: {
      namespaced: true,
      state() {
        return {
          homeMsg: 'homeMsg',
          homeName: 'homeName',
          homeCount: 20,
          homeAge: 28,
          homeSex: false,
          homeCm: 'homeCm'
        }
      },
      getters: {
        height(state) {
          return 179 + state.homeCm
        },
        personMsg(state, getters, rootState, rootGetters) {
          return `名字是${state.homeName}，身高是${getters.height}，rootState是${rootState.name}.rootGetters是${rootGetters.height}`
        }
      },
      mutations: {

      },
      actions: {
        homeAction({ commit, dispatch, state, getters, rootState, rootGetters }, payload) {
          console.log(state.homeName)
          console.log(getters.height)
          console.log(rootState.name)
          console.log(rootGetters.height)
          console.log(payload.n)
          commit('sonUseFatherMutations', null, { root: true })
          dispatch('sonUseFatherActions', null, { root: true })
        },
        sonResponse: {
          root: true,
          handler: () => {
            console.log('useSuccess')
          }
        }

      }
    }
  }
})

store.registerModule('index', {
  namespaced: true,
  state() {
    return {
      name: 'indexName'
    }
  },

})


export default store
