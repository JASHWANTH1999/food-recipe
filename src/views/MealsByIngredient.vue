<template>
  <!-- <pre>{{ meals }}</pre> -->
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";
// debugger;
const meals = computed(() => store.state.mealsbyingredients);
const route = useRoute();
onMounted(() => {
  store.dispatch("setMealsByIngredients", route.params.ingredient);
});
</script>

<style lang="scss" scoped></style>
