<template>
  <div id="app">
    <section>
      <h1 class="title">Yet another pattern for API calls using vuejs/vuex</h1>
      <div class="tile is-ancestor box">
        <div class="tile is-vertical is-4">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child box">
              <div>
                <button class="button" @click="$store.dispatch('getCatsList')">Get Cats 🐱</button>
                <br>
                <input type="checkbox" @click="setaxiosFail()"> fail state
                <hr>
                <p class="title">Status</p>
              </div>
              <div class="columns">
                <div class="column">
                  <div>
                    <span
                      class="tag"
                      :class="{'is-success':$store.state.catsList.status.pending,
              'is-danger':!$store.state.catsList.status.pending}"
                    >Pending</span>
                  </div>
                </div>
                <div class="column">
                  <div>
                    <span
                      class="tag"
                      :class="{'is-success':$store.state.catsList.status.success,
              'is-danger':!$store.state.catsList.status.success}"
                    >Success</span>
                  </div>
                </div>
                <div class="column">
                  <div>
                    <span
                      class="tag"
                      :class="{'is-success':$store.state.catsList.status.fail,
              'is-danger':!$store.state.catsList.status.fail}"
                    >Fail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-vertical is-8">
          <div class="box">
            <p class="title">State</p>
            <vue-json-pretty :data="$store.state.catsList" highlightMouseoverNode></vue-json-pretty>
          </div>
        </div>
      </div>
      <div>contact: jirari.larbi@gmail.com</div>
    </section>
  </div>
</template>

<script>
import axios from "./api/axiosFake";
import VueJsonPretty from "vue-json-pretty";
export default {
  name: "App",
  components: {
    VueJsonPretty
  },
  methods: {
    setaxiosFail() {
      axios.fail = !axios.fail;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<div class="tile">
    <!-- Add content or other tiles -->
  </div>
  <div class="tile">
    <!-- Add content or other tiles -->
  </div>