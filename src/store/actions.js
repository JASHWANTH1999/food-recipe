import AxiosClient from "../AxiosClient";

export function searchMeals({ commit }, keyword) {
  AxiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    // debugger;
    commit("setSearchedMeals", data.meals);
  });
}

export function mealsByLetter({ commit }, letter) {
  AxiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    // debugger;
    commit("setMealsByLetter", data.meals);
  });
}

export function setMealsByIngredients({ commit }, ingredient) {
  AxiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    // debugger;
    commit("setMealsByIngredients", data.meals);
  });
}
