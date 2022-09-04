<template>
  <div class="movies-list">
    <div class="movies-list__header">
      <h2>Фильмы</h2>
      <the-select />
    </div>
    <hr />
    <movies-list-item
      v-for="(movie, index) in MOVIES"
      :key="index"
      :movie="movie"
    />
  </div>
</template>


<script>
import TheSelect from "@/components/select/TheSelect.vue";
import { mapGetters, mapActions } from "vuex";
import MoviesListItem from "@/components/movies/MoviesListItem.vue";

export default {
  components: { TheSelect, MoviesListItem },
  name: "movies-list",
  computed: {
    ...mapGetters(["MOVIES"]),
  },
  props: {},
  data: () => ({}),
  mounted() {
    this.GET_MOVIES();
  },
  methods: {
    ...mapActions(["GET_MOVIES"]),
  },
};
</script>


<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";

.movies-list {
  &__header {
    h2 {
      font-weight: 500;
      font-size: 32px;
      margin: 0 0 18px 0;
      color: #fff;
    }
  }

  hr {
    background-color: $lightGray;
    width: 100%;
    height: 1px;
    margin: 18px 0 40px 0;
  }
}
</style>