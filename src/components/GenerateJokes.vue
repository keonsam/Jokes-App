<template>
  <div class="container">
    <button class="button button-secondary" @click="addJokes">
      Add Ten Jokes
    </button>
    <button class="button button-primary" @click="addJoke">Add a Joke</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GenerateJokes",
  methods: {
    ...mapActions(["addJoke", "addJokes"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.button {
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 15px;
  font-size: 16px;
  color: white;
  cursor: pointer;
}

.button-secondary {
  background: #28a745;
}

.button-primary {
  background: #007bff;
}
</style>
