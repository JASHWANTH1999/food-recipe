<template>
  <div class="max-w-[800px] mx-auto p-8">
    <!-- <pre>{{ meal }}</pre> -->
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong>Category:</strong>{{ meal.strCategory }}</div>
      <div><strong>Area:</strong>{{ meal.strArea }}</div>
      <div><strong>Tags:</strong>{{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text 2-xl font-semibold mb-2">Ingredient</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)" key="index">
            <li v-if="meal[`strIngredient${index + 1}`]" v-bind:key="index">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text 2-xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)" key="index">
            <li v-if="meal[`strMeasure${index + 1}`]" v-bind:key="index">
              {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <YoutubeButton>Youtube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
          >View Original Resource</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import AxiosClient from "../AxiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const meal = ref({});
const route = useRoute();
onMounted(() => {
  AxiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style lang="scss" scoped></style>
