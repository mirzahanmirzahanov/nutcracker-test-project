<template>
  <div class="movies-list">
    <the-preloader v-if="this.STATUS === 'loading'" />
    <div v-else>
      <div class="movies-list__header">
        <h2>Фильмы</h2>
        <the-select @sortByName="sortByName" @sortByYear="sortByYear" />
      </div>
      <hr />
      <movies-list-item
        v-for="(movie, index) in MOVIES"
        :key="index"
        :movie="movie"
      />
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

import TheSelect from "@/components/select/TheSelect.vue";
import MoviesListItem from "@/components/movies/MoviesListItem.vue";
import ThePreloader from "@/components/preloader/ThePreloader.vue";

export default {
  components: { TheSelect, MoviesListItem, ThePreloader },
  name: "movies-list",
  computed: {
    ...mapGetters(["MOVIES", "STATUS"]),
  },
  props: {},
  data: () => ({}),
  mounted() {
    setTimeout(() => {
      this.GET_MOVIES();
    }, 1500);
  },
  methods: {
    ...mapActions(["GET_MOVIES"]),
    sortByName() {
      this.MOVIES.sort((minTitle, maxTitle) => {
        return minTitle.title.toLowerCase() > maxTitle.title.toLowerCase();
      });
    },
    sortByYear() {
      this.MOVIES.sort((maxYear, minYear) => {
        return maxYear.year - minYear.year;
      });
    },
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