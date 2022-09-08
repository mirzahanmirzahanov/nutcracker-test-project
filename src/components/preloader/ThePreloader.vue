<template>
  <div class="the-preloader">
    <div class="the-preloader__container">
      <span class="black"></span>
      <span class="red"></span>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "the-preloader",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";

.the-preloader {
  width: 100%;
  height: 85vh;
  position: relative;
  &__container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    @keyframes red-circle-loading {
      to {
        transform: rotateZ(360deg);
      }
    }
    @keyframes black-circle-loading {
      to {
        transform: rotateZ(-360deg);
      }
    }
    .red,
    .black {
      position: absolute;
      display: block;
      border-radius: 50%;
    }
    .red {
      width: 70px;
      height: 70px;
      border: 2px solid $red;
      border-top-color: #363232;
      border-left-color: #363232;
			animation: red-circle-loading 1200ms ease-in-out infinite;
    }
    .black {
      width: 90px;
      height: 90px;
      border: 2px solid #000;
      border-top-color: #363232;
      border-right-color: #363232;
			animation: black-circle-loading 1200ms ease-in-out infinite;
    }
  }
}
</style>