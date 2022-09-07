<template>
  <div class="movies-list-item">
    <div class="movies-list-item__img">
      <!-- <img :src="movie.frames[0]" alt="some.photo" /> -->
    </div>
    <div class="movies-list-item__info">
      <router-link
        class="title"
        :to="{
          name: 'SingleMovie',
          params: { id: movie.id },
        }"
      >
        {{ movie.title }}
      </router-link>
      <div class="year">
        <p>{{ movie.year }},&nbsp</p>
        <p v-for="(genre, index) in movie.genres" :key="index">
          {{ genre }},&nbsp
        </p>
      </div>
      <div class="directors">
        <p>РЕЖИССЕР:&nbsp</p>
        <p v-for="(director, index) in movie.directors" :key="index">
          {{ director }}
        </p>
      </div>
      <div class="actors">
        <p>АКТЕРЫ:&nbsp</p>
        <ul>
          <li class="actor" v-for="(actor, index) in movie.actors" :key="index">
            {{ actor }},&nbsp
          </li>
        </ul>
      </div>
      <p class="description">
        {{ movie.description }}
      </p>
      <div v-if="movie.collapse.duration !== null" class="duration">
        <img
          :src="require('@/assets/images/filmDurationBackground.png')"
          alt="some img"
        />
        <div class="duration__info">
          <p>
            {{ movie.collapse.duration[0] }}
          </p>
          <img :src="require('@/assets/images/filmIcon.png')" alt="some img" />
        </div>
      </div>
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
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";

.movies-list-item {
  position: relative;
  display: flex;
  margin: 24px 0;
  background-color: $darkGray;
  box-shadow: 0px 4px 4px #00000040;
  transition: 0.3s ease-in-out;
  &__img {
    min-width: 168px;
    min-height: 100%;
    margin: 0 24px 0 0;
    background-color: $lightGray;
  }

  &__info {
    margin: 32px 32px 32px 0;
    color: $gray;
    .title,
    .year,
    .directors {
      font-weight: 700;
      display: flex;
    }
    .title {
      color: #fff;
      font-size: 32px;
      margin: 0 0 12px 0;
      text-decoration: none;
    }
    .year {
      text-transform: uppercase;
      font-size: 12px;
      margin: 0 0 8px 0;
    }
    .directors {
      font-size: 12px;
      margin: 0 0 8px 0;
    }
    .actors {
      font-size: 12px;
      margin: 0 0 15px 0;
      display: flex;

      .actor {
        display: inline;
        list-style: none;
        color: #e5e5e5;
        font-weight: 400;
      }
    }
    .description {
      font-size: 16px;
      color: #fff;
      font-weight: 400;
    }
    .duration {
      position: absolute;
      top: 32px;
      right: 0;
      &__info {
        position: absolute;
        display: flex;
        align-items: center;
        top: 20%;
        left: 10%;
        color: #000;
        p {
          margin: 0 10px 0 0;
        }
      }
    }
  }
}

.movies-list-item:hover {
  transform: translateY(-8px);
  box-shadow: 0px 8px 20px #00000059;
}
</style>