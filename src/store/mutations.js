export function setSearchedMeals(state, meals) {
  state.searchmeal = meals || [];
}

export function setMealsByLetter(state, meals) {
  state.mealsbyletter = meals || [];
}

export function setMealsByIngredients(state, meals) {
  state.mealsbyingredients = meals || [];
}
