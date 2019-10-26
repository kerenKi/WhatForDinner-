import { Recipe } from './models/recipe';

export default function constructRecipeFromAPIResponse(meal): Recipe {
  /* the structure of the meal API contains 20 keys named strIngredient(1-20).
  In this part i'm parsing through the ingredients and building the full ingredients array */
  const ingredientsArray = [];
  let endOfIngredient = false;
  for ( let i = 1; i < 20 && !endOfIngredient; i++) {
    const ingredient = `strIngredient${i}`;
    if (meal[ingredient] !== '') {
      ingredientsArray.push(meal[ingredient]);
    } else {
      endOfIngredient = true;
    }
  }

  const recipe = {
    title: meal.strMeal,
    category: meal.strCategory,
    instructions: meal.strInstructions,
    image: meal.strMealThumb,
    ingredients: ingredientsArray,
  };
  return recipe;
}
