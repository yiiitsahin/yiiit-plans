<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    background-color: gray;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    width: 600px;
    margin: 0 auto;
  }
</style>
