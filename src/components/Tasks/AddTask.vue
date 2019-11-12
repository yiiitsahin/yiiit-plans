<template>
  <form @submit.prevent="addNewTask(payload)">
    <input type="text" v-model="title" placeholder="Title" />
    <input type="text" v-model="details" placeholder="Details" />
    <input :disabled="title === ''" type="submit" value="Task Ekle" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["planIndex"],
  data() {
    return {
      title: "",
      details: ""
    };
  },
  computed: {
    payload() {
      return {
        task: {
          title: this.title,
          details: this.details
        },
        planIndex: this.planIndex
      };
    }
  },
  methods: {
    ...mapMutations({ addTask: "ADD_TASK" }),
    addNewTask(payload) {
      this.addTask(payload);
      this.details = "";
      this.title = "";
    }
  }
};
</script>