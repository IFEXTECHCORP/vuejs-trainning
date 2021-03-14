import Vue from 'vue';
import Vuex from 'vuex';
import tasksModule from './modules/tasks'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    tasks: tasksModule
  },
  state: {

  },

  // Retornam dados da store
  getters: {
   
  },

  // Alteram o estado  da store
  mutations: {
   
  },


  // Disparar ações assincronas
  // Comitam mutations
  actions: {
  
  }
});