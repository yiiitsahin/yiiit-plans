<template>
  <div class="plan__adding-panel">
      <form @submit.prevent="addPlan(plan)">
        <input type="text" v-model="date" placeholder="Tarih"/>
        <input type="text" v-model="title" placeholder="Başlık"/>
        <input :disabled="date === ''" type="submit" value="Plan Ekle" />
      </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data(){
        return {
            date: "",
            title: null
        }
    },
    computed: {
        plan(){
            return {
                date: this.date, 
                title: this.title, 
                tasks:[], 
                id:Math.random().toString()
            }
        }
    },
    methods: {
        ...mapMutations({addPlan : "ADD_PLAN"})
    }
}
</script>

<style lang="scss">
    .plan__adding-panel {
        padding: 5px;
        input {
            display: block;
            padding: 5px;
            margin: 3px 0;
        }
    }
</style>