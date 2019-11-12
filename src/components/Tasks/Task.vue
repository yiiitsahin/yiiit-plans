<template>
  <li>
    <div>{{task.title}}<button @click="deleteTask(indexes)">Sil</button></div>
    <div>{{task.details}}</div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "taskIndex", "planIndex"],
  methods: {
    ...mapActions({deleteTask: "DELETE_TASK"})
  },
  computed: {
    indexes(){
      return {
        planIndex: this.planIndex,
        taskIndex: this.taskIndex
      }
    }
  }
};
</script>

<style>
</style>