import axios from 'axios';

export const mealApi = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

export function getMealById( id: number ) {
  const self = this;
  mealApi.get(`lookup.php?i=${id}`)
    .then((response) => {
      const meal = response.data.meals[0];
      self.recipe.title = meal.strMeal;
      self.recipe.category = meal.strCategory;
      self.recipe.instructions = meal.strInstructions;
      self.recipe.image = meal.strMealThumb;
      self.recipe.ingredients = [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
        ];
      self.recipe.ingredients = self.recipe.ingredients.filter( (ingridient) => ingridient !== '');
    })
    .catch( (error) => {
      // console.log(error);
    });
}

