<template>
  <div class="single-movie">
    <div class="single-movie__header">
      <img :src="require('@/assets/images/pointer.png')" alt="some img" />
      <router-link class="link" to="/">Назад к списку</router-link>
    </div>
    <hr />
    <the-preloader v-if="this.status === 'loading'" />
    <div v-else-if="this.status === 'success'" class="single-movie__success">
      <div class="movies-list-item">
        <div class="movies-list-item__img">
          <!-- <img :src="movie.frames[0]" alt="some.photo" /> -->
        </div>
        <div class="movies-list-item__info">
          <h3 class="title">
            {{ this.movie.title }}
          </h3>
          <div class="year">
            <p>{{ this.movie.year }},&nbsp</p>
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
              <li
                class="actor"
                v-for="(actor, index) in movie.actors"
                :key="index"
              >
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
              <img
                :src="require('@/assets/images/filmIcon.png')"
                alt="some img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 v-else-if="this.status === 'error'" class="single-movie__error">
      К сожалению, по вашему запросу ничего не найдено...
    </h3>
  </div>
</template>


<script>
import axios from "axios";
import ThePreloader from "@/components/preloader/ThePreloader.vue";

export default {
  components: { ThePreloader },
  name: "single-movie",
  computed: {
  },
  props: {},
  data: () => ({
    movie: {},
    status: "loading",
  }),
  async mounted() {
    setTimeout(() => {
      this.getSingleMovie()
    }, 1500);
  },
  methods: {
    async getSingleMovie() {
      try {
        const response = await axios.get(
          `https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`
        );
        this.movie = response.data.data
        this.status = "success";
      } catch (error) {
        this.status = "error";
      }
    },
  },
};
</script>


<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";

.single-movie {
  hr {
    margin: 22px 0 0 0;
    color: $lightGray;
  }
  &__header {
    display: flex;
    align-items: center;
    img {
      padding: 0 20px 0 0;
    }
    .link {
      font-weight: 400;
      font-size: 20px;
      color: $lightRed;
    }
  }

  &__success {
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
  }

  &__error {
    margin: 24px 0 0 0;
    font-size: 20px;
    font-weight: 700;
    color: #FFF;
  }
}
</style>