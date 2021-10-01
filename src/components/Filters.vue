<template>
  <form class="form">
    <label class="form-label">
      <input
        class="form-input"
        type="checkbox"
        checked
        @input="updateFilter('programming')"
      />
      Programming
    </label>
    <label class="form-label">
      <input
        class="form-input"
        type="checkbox"
        checked
        @input="updateFilter('misc')"
      />
      Miscellaneous
    </label>
    <label class="form-label">
      <input
        class="form-input"
        type="checkbox"
        checked
        @input="updateFilter('pun')"
      />
      Pun
    </label>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Filters",
  methods: {
    ...mapActions(["updateFilter"]),
  },
};
</script>

<style scoped>
.form {
  margin-top: 15px;
  margin-bottom: 15px;
}
.form-label {
  font-size: 14px;
}
.form-label:not(:last-child) {
  margin-right: 10px;
}
</style>
