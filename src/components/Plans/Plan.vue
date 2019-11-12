<template>
  <div class="plan">
    <div style="z-index:1; position: relative;">
      <div>Tarih: {{plan.date}} : {{plan.title}} <span><button @click="deletePlan(planIndex)">Sil</button></span></div>
      <div>
        <Tasks :tasks="plan.tasks" :planIndex="planIndex"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from "../Tasks/Tasks.vue";
import { mapActions } from "vuex";

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
  },
  methods: {
    ...mapActions({deletePlan: "DELETE_PLAN"})
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