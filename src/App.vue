<template>
  <div id="app">
    <header class="header">
      <h1>#movienow</h1>
    </header>
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>


<script>
export default {
  components: {},
  name: "",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss'>
@import "@/assets/scss/variables.scss";

.header {
  background-color: $red;
  text-align: center;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.28);
  padding: 36px 0 16px 0;
  h1 {
    margin: 0;
    font-size: 48px;
    letter-spacing: 0.21em;
    text-transform: uppercase;
  }
}

.main {
  margin-top: 40px;
}
</style>