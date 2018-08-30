import { AllActions } from "../actions";
import { RecipeModel } from "../models/recipemodel";
import rawData from "../data/recipes.json";

interface RecipeMap {
    [recipeName: string]: RecipeModel;
};
function parseRawData(): RecipeMap {
    const recipes: RecipeMap = {};
    rawData.forEach((recipe: any) => {
        recipes[recipe.name] = new RecipeModel(recipe);
    });
    return recipes;
}
export interface RecipesState {
    allRecipes: RecipeMap;
}

const INIT_STATE: RecipesState = {
    allRecipes: parseRawData(),
};

export default (state: RecipesState =INIT_STATE, action: AllActions): RecipesState => {
    switch (action.type) {
        default:
            return state;
    }
}
