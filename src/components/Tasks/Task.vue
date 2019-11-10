<template>
  <li>
    <div>{{task.title}}</div>
    <div>{{task.details}}</div>
  </li>
</template>

<script>
export default {
  props: ["task"]
};
</script>

<style>
</style>