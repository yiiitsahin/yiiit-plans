<template>
  <div class="plan">
    <div style="z-index:1; position: relative;">
      <div>Tarih: {{plan.date}} : {{plan.title}}</div>
      <div>
        <Tasks :tasks="plan.tasks" :planIndex="planIndex"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from "../Tasks/Tasks.vue";

export default {
  props: {
    plan: {
      isRequired: true
    },
    planIndex: {
      isRequired: true
    },
  },
  components: {
    Tasks
  }
};
</script>

<style>
.plan {
  border: 1px solid green;
  margin: 0 0 5px 0;
  background-color: #b98911;
}
</style>