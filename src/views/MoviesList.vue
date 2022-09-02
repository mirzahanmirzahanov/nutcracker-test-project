<template>
  <div class="home-page">
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  name: "home-page",
  computed: {
    ...mapGetters(['MOVIES']),
  },
  props: {},
  data: () => ({}),
  mounted() {
    this.GET_MOVIES()
    },
  methods: {
    ...mapActions(['GET_MOVIES']),
  },
};
</script>


<style lang='scss' scoped>
</style>