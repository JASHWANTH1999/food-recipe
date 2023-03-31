<template>
  <div class="p-8">
    <h1 class="text-4xl text-orange-500 font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      class="rounded border-2 border-gray-200 bg-white w-full mb-3"
      placeholder="Search for Ingredients"
      v-model="keyword"
    />
    <!-- <pre>{{ ingredients }}</pre> -->
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of searchingredient"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow hover:scale-105 transition-all"
    >
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import AxiosClient from "../AxiosClient";
const ingredients = ref([]);
const keyword = ref("");
const searchingredient = computed(() => {
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
onMounted(() => {
  AxiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style lang="scss" scoped></style>
