<template>
  <ul class="tasks">
    <Task v-for="(task, index) in tasks" :key="'task' + index" :task="task" />
    
    <AddTask :planIndex="planIndex"/>
  </ul>
</template>

<script>
import Task from "./Task.vue";
import AddTask from "./AddTask";

export default {
  props: ["tasks", "planIndex"],
  components: {
    Task,
    AddTask
  }
};
</script>

<style lang="scss">
.tasks {
  border: 1px solid yellow;
}
</style>