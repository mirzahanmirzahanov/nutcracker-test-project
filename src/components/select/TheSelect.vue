<template>
  <div class="the-select">
    <label for="ch-1">
      <input type="checkbox" name="" id="ch-1" />
      Отсортировать по названию
    </label>
    <label for="ch-2">
      <input type="checkbox" name="" id="ch-2" />
      Отсортировать по году
    </label>
  </div>
</template>


<script>
export default {
  components: {},
  name: "the-select",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss'>
@import "@/assets/scss/variables.scss";
	.the-select {
		color: $lightGray;
	}
</style>