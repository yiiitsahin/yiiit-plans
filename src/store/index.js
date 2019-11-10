import Vue from 'vue'
import Vuex from 'vuex'

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
    getPlans: state => state.plans
  },
  mutations: {
    "ADD_PLAN"(state, plan){
      state.plans.push(plan);
    },
    "ADD_TASK"(state, payload){
      state.plans[payload.planIndex].tasks.push(payload.task);
    }
  },
  actions: {
  },
  modules: {
  }
})
