<template>
  <div class="plan__adding-panel">
      <form @submit.prevent="addPlan">
        <input type="text" v-model="date" placeholder="Tarih"/>
        <input type="text" v-model="title" placeholder="Başlık"/>
        <input type="submit" value="Plan Ekle" />
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            date: null,
            title: null
        }
    },
    methods: {
        addPlan(){
            //Denem bunun yerine mutation yazılacak.
            console.log("Plan", this.title, this.date);
            this.$store.state.plans.push({date:this.date, title: this.title, tasks:[], id:Math.random().toString()});
        }
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