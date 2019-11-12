import Vue from 'vue'
import Vuex from 'vuex'
import * as type from "./types";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plans: [
      {
        id: "0",
        date: "18.01.1987",
        title: "Plan #1",
        tasks: [
          {
            title: "Task 1",
            details: "Şöyle bir çalışma",
            active: true
          },
          {
            title: "Task 2",
            details: "Buda şöyle bir çalışma",
            active: true
          },
        ]
      },
      {
        id: "2",
        date: "27.10.1989",
        title: "Plan #3",
        tasks: [
          {
            title: "Task 1",
            details: "Başka bir çalışma",
            active: true
          },
          {
            title: "Task 2",
            details: "Daha başka bir çalışma",
            active: true
          },
        ]
      },
      {
        id: "3",
        date: "27.10.1989",
        title: "Plan #3",
        tasks: [
          {
            title: "Task 1",
            details: "Başka bir çalışma",
            active: true
          },
          {
            title: "Task 2",
            details: "Daha başka bir çalışma",
            active: true
          },
        ]
      }
    ]
  },
  getters: {
    getPlans: state => state.plans,
    getPlansById: (state, getters) => id => getters.getPlans.filter(plan => plan.id === id)
  },
  mutations: {
    [type.ADD_PLAN](state, plan){
      state.plans.push(plan);
    },
    [type.ADD_TASK](state, payload){
      state.plans[payload.planIndex].tasks.push(payload.task);
    }
  },
  actions: {
    [type.ADD_PLAN]({commit}, plan){
      commit(type.ADD_PLAN, plan);
    },
    [type.ADD_TASK]({commit}, payload){
      commit(type.ADD_TASK, payload);
    }
  },
  modules: {
  }
})
