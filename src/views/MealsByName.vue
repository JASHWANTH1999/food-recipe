<template>
  <div class="p-8 pb-0">
    <div class="text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Search By Name</h1>
    </div>

    <input
      type="text"
      class="rounded border-2 border-gray-200 bg-white w-full"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

import MealItem from "../components/MealItem.vue";

const route = useRoute();

const keyword = ref("");
const meals = computed(() => store.state.searchmeal);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style lang="scss" scoped></style>
