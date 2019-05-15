import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [],
    startIndex: 0,
    number: 20
  },
  mutations: {
    updateState (state, payload) {
      if (!Array.isArray(payload) || !payload.length) return
      state.dataList = state.dataList.concat(payload)
      state.startIndex = state.dataList.length
      state.number = state.startIndex + 20
    }
  },
  getters: {
    getAverage: state => {
      const sum = state.dataList.reduce((pre, cur) => (pre = cur.data + pre), 0)
      const count = state.dataList.length
      return count > 0 ? (sum / count).toFixed(2) : 0
    },
    getData: state => state.dataList
  },
  actions: {
    async getDataCall ({ state, commit }) {
      // TODO
      const { startIndex, number } = state
      try {
        const mockData = await mockGenerator(startIndex, number)
        commit('updateState', mockData)
      } catch (error) {
        this.$toast('出错了')
      }
    }

  }
})
