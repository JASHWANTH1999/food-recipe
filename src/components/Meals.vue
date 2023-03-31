<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pX-8">
    <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" />
    <!-- <pre>{{ meals }}</pre> -->
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 P-8">
    There are No Meals
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: Array,
});
</script>

<style lang="scss" scoped></style>
