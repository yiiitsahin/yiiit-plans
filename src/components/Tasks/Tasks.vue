<template>
  <ul class="tasks">
    <Task v-for="(task, index) in tasks" :key="'task' + index" :task="task" />
    <div>
      <form @submit.prevent="addNewTask(payload)">
        <input type="text" v-model="title" placeholder="Title" />
        <input type="text" v-model="details" placeholder="Details" />
        <input type="submit" value="Task Ekle" />
      </form>
    </div>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
import Task from "./Task.vue";

export default {
  props: ["tasks", "planIndex"],
  data() {
    return {
      title: null,
      details: null
    };
  },
  components: {
    Task
  },
  computed: {
    payload() {
      return {
        task: {
            title: this.title,
            details: this.details
        },
        planIndex: this.planIndex
      }
    }
  },
  methods: {
    ...mapMutations({addTask : "ADD_TASK"}),
    addNewTask(payload) {
      this.addTask(payload);
      this.details = null;
      this.title = null;
    }
  }
};
</script>

<style lang="scss">
.tasks {
  border: 1px solid yellow;
}
</style>