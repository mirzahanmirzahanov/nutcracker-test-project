<template>
  <div class="the-select">
    <div class="checkbox-1">
      <div 
        class="checkbox-1__background"
        @click="sortByName" 
      >
        <img
          class="checkbox-img-1"
          :src="require('@/assets/images/ic_check_box active.png')"
          alt="some img"
        />
      </div>
      <p>Отсортировать по названию</p>
    </div>
    <div class="checkbox-2">
      <div
        class="checkbox-1__background"
        @click="sortByYear" 
      >
        <img
          class="checkbox-img-2"
          :src="require('@/assets/images/ic_check_box active.png')"
          alt="some img"
        />
      </div>
      <p>Отсортировать по году</p>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "the-select",
  computed: {},
  props: {},
  data: () => ({
    img1: null,
    img2: null
  }),
  mounted() {
      this.img1 = document.querySelector(".checkbox-img-1");
      this.img2 = document.querySelector(".checkbox-img-2");
  },
  methods: {
    sortByName() {
      this.img1.style.visibility = 'visible'
      this.img2.style.visibility = 'hidden'
      this.$emit('sortByName')
    },
    sortByYear() {
      this.img1.style.visibility = 'hidden'
      this.img2.style.visibility = 'visible'
      this.$emit('sortByYear')
    },
  },
};
</script>


<style lang='scss'>
@import "@/assets/scss/variables.scss";
.the-select {
  display: flex;
  align-items: center;
  color: $lightGray;
  .checkbox-1,
  .checkbox-2 {
    display: flex;
    align-items: center;
    &__background {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $lightGray;
      margin: 0 10px 0 0;
      width: 13px;
      height: 13px;
    }
  }
  .checkbox-1 {
    margin: 0 30px 0 0;
    .checkbox-img-1 {
      visibility: hidden;
    }
  }
  .checkbox-2 {
    .checkbox-img-2 {
      visibility: hidden;
    }
  }
}
</style>