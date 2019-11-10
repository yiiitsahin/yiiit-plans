<template>
  <ul class="tasks">
    <Task v-for="(task, index) in tasks" :key="'task' + index" :task="task"/>
    <div>
        <form @submit.prevent="addTask">
            <input type="text" v-model="title" placeholder="Title" />
            <input type="text" v-model="details" placeholder="Details" />
            <input type="submit" value="Task Ekle"/>
        </form>
    </div>
  </ul>
</template>

<script>
import Task from "./Task.vue";

export default {
    props: ["tasks","planIndex"],
    data(){
        return {
            title: null,
            details: null
        }
    },
    components: {
        Task
    },
    methods: {
        addTask(){
            this.$store.state.plans[this.planIndex].tasks.push({title:this.title, details:this.details});
            this.details = null;
            this.title = null;
        }
    }
}
</script>

<style lang="scss">
    .tasks {
        border: 1px solid yellow;
    }
</style>