<template>
  <ul class="list">
    <li class="card" v-for="(joke, index) in filteredJokes" :key="joke.id">
      <button class="close" @click="removeJoke(index)">x</button>
      <h2 class="card-heading">{{ joke.setup }}</h2>
      <p class="card-content">{{ joke.delivery }}</p>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Jokes",
  data() {
    return {
      jokes: this.$store.state.jokes,
    };
  },
  computed: {
    filteredJokes() {
      return this.$store.getters.filteredJokes;
    },
  },
  methods: {
    ...mapActions(["removeJoke"]),
  },
};
</script>

<style scoped>
.list {
  margin: 0;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  list-style: none;
}

.card {
  border: 1px solid black;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 4px;
}

.close {
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
}
</style>
