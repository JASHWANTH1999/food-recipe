<template>
  <div class="flex flex-col p-8">
    <div class="flex justify-center text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Search By Letter</h1>
    </div>
    <div class="flex flex-wrap gap-3 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:scale-150 ease-in-out transition-all hover:text-orange-500"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();

const meals = computed(() => store.state.mealsbyletter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
watch(route, () => {
  store.dispatch("mealsByLetter", route.params.letter);
});
// onMounted(() => {});
</script>

<style lang="scss" scoped></style>
