import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    tasks: []
  },
  getters: {
    getTasks(state, getters) {
      return getters.mapTasks;
    },
    mapTasks(state, getters) {
      return state.tasks.map(task => ({ ...task, date: new Date() }))
    }
  },

  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    }
  },

  actions: {
    getTasks({ dispatch, commit }, payload) {
      dispatch('findTasks', payload)
      .then(tasks => commit('setTasks', tasks))
    },

    findTasks(context, payload) {
      return Vue.prototype.$http.get('/tasks').then((res) => res.data)
    }
  }
}