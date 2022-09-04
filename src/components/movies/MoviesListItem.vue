<template>
  <div class="movies-list-item">
    <div class="movies-list-item__img">
      <!-- <img :src="`https://floating-sierra-20135.herokuapp.com/api/movie/${movie.id}${movie.poster}`" alt="some.photo" /> -->
      <img :src="movie.frames[0]" alt="some.photo" />
    </div>
    <div class="movies-list-item__info">
      <h3 class="tilte">
        {{ movie.title }}
      </h3>
      <div class="year">
        <p>{{ movie.year }}</p>
        <p v-for="(genre, index) in movie.genres" :key="index">
          {{ genre }}
        </p>
      </div>
      <div class="directors">
        <p>РЕЖИССЕР:</p>
        <p v-for="(director, index) in movie.directors" :key="index">
          {{ director }}
        </p>
      </div>
      <div class="actors">
        <p>АКТЕРЫ:</p>
        <p v-for="( actor, index) in movie.actors" :key="index">
          {{ actor }},
        </p>
      </div>
      <p class="description">
        {{ movie.description }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "movies-list-item",
  computed: {},
  props: {
    movie: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data: () => ({
    poster: ''
  }),
  mounted() {
    setTimeout(() => {
      this.poster = this.movie.poster;
      this.fuck()
    }, 3000);
  },
  methods: {
    fuck() {
      this.poster.split('').shift().toString()
    }
  },
};
</script>


<style lang='scss' scoped>



</style>