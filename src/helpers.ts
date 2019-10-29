import { Recipe } from './models/recipe';

export default function constructRecipeFromAPIResponse(meal: any): Recipe {
  /* the structure of the meal API contains 20 keys named strIngredient(1-20).
  In this part i'm parsing through the ingredients and building the full ingredients array */
  const ingredientsArray = [];
  let endOfIngredients = false;
  for ( let i = 1; i < 20 && !endOfIngredients; i++) {
    const ingredient = `strIngredient${i}`;
    const measure = `strMeasure${i}`;
    if (meal[ingredient] !== '') {
      ingredientsArray.push(`${meal[measure]} ${meal[ingredient]}`);
    } else {
      endOfIngredients = true;
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
