<template>
  <ul class="tasks">
    <Task v-for="(task, index) in tasks" :key="'task' + index" :task="task" :taskIndex="index" :planIndex="planIndex"/>
    
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
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #e7e4e4;
  margin: 5px;
  padding: 10px 10px 10px 40px;
}
</style>