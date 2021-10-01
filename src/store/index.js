import Vue from "vue";
import Vuex from "vuex";
import { fetchJokes } from "../utils/jokesAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes: [],
    filters: {
      programming: true,
      misc: true,
      pun: true,
    },
  },
  getters: {
    filteredJokes: (state) => {
      return state.jokes.filter(
        (val) => state.filters[val.category.toLowerCase()]
      );
    },
  },
  mutations: {
    addJoke(state, payload) {
      state.jokes.push(payload);
    },
    addJokes(state, payload) {
      state.jokes.push(...payload);
    },
    updateFilter(state, type) {
      state.filters[type] = !state.filters[type];
    },
    removeJoke(state, payload) {
      state.jokes.splice(payload, 1);
    },
  },
  actions: {
    async addJoke({ commit }) {
      const joke = await fetchJokes("");
      commit("addJoke", joke);
    },
    async addJokes({ commit }) {
      const data = await fetchJokes("&amount=10");
      commit("addJokes", data.jokes);
    },
    updateFilter({ commit }, type) {
      commit("updateFilter", type);
    },
    removeJoke({ commit }, index) {
      commit("removeJoke", index);
    },
  },
});
