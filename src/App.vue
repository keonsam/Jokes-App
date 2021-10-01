<template>
  <div id="app">
    <h1>Got Jokes?</h1>
    <GenerateJokes />
    <Filters />
    <Jokes />
  </div>
</template>

<script>
import GenerateJokes from "./components/GenerateJokes.vue";
import Filters from "./components/Filters.vue";
import Jokes from "./components/Jokes.vue";

export default {
  name: "App",
  components: {
    GenerateJokes,
    Filters,
    Jokes,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
