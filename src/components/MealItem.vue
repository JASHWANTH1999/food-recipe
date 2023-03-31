<template>
  <!-- <pre>{{ meal }}</pre> -->
  <div
    class="bg-white rounded-xl shadow-[0_9px_0_rgb(178, 190, 181)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:scale-105 hover:translate-y-1 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.str"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 100) }}. . .
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: Object,
});
</script>

<style lang="scss" scoped></style>
