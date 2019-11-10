<template>
  <div class="plans">

      <AddPlan/>

      <Plan v-for="(plan, index) in plans" :key="index" :plan="plan" :planIndex="index"></Plan>

  </div>
</template>

<script>
import Plan from "./Plan.vue"
import AddPlan from "./AddPlan.vue"
import { mapGetters } from "vuex";
export default {
  name: 'Plans',
  components: {
    Plan,
    AddPlan
  },
  computed: {
    ...mapGetters({plans: "getPlans"}) 
  }
}
</script>

<style lang="scss">
.plans {
  border: 1px solid red;
  padding: 5px;
}
</style>
