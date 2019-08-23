import Vue from "vue";
import Vuex from "vuex";
import axios from "../api/axiosFake";
import { StoreUtil } from "../utils";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catsList: StoreUtil.state()
  },
  mutations: {
    SET_CATS_LIST(state, payload) {
      state.catsList = StoreUtil.updateState(state.catsList, payload);
    }
  },
  actions: {
    getCatsList(context) {
      //pending
      context.commit("SET_CATS_LIST");
      console.log("[store] getting cats list");
      //mocking ajax call
      axios
        .get("https://localhost:3000/cats-list")
        .then(({ data }) => {
          context.commit("SET_CATS_LIST", data);
        })
        .catch(e => {
          context.commit("SET_CATS_LIST", e);
        });
    }
  }
});
