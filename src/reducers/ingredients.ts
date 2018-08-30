import { ActionTypes, AllActions } from "../actions";
import { RecipeSelectedAction, RecipeUnselectedAction } from "../containers/recipe/actions";

export interface IngredientsState {
    [recipeName: string]: number;
}
const INIT_STATE: IngredientsState = {};

export default (state: IngredientsState=INIT_STATE, action: AllActions): IngredientsState => {
    switch (action.type) {
        case ActionTypes.RECIPE_SELECTED:
            return handleRecipeSelected(state, action);
        case ActionTypes.RECIPE_UNSELECTED:
            return handleRecipeUnselected(state, action);
        default:
            return state;
    }
}
export function getUniqueIngredients( ingredientsState: IngredientsState): string[] {
    const ingredients: string[] = Object.keys(ingredientsState);
    ingredients.sort();
    return ingredients;
}
function handleRecipeSelected(prevState: IngredientsState, action: RecipeSelectedAction ): IngredientsState {
    const newState: IngredientsState = {};
    Object.assign(newState, prevState);
    action.payload.ingredients.forEach((ingredient: string) => {
        if (newState.hasOwnProperty(ingredient)) {
            newState[ingredient] += 1;
        } else {
            newState[ingredient] = 1;
        }
    });
    return newState;
}
function handleRecipeUnselected(prevState: IngredientsState, action: RecipeUnselectedAction ): IngredientsState {
    const newState: IngredientsState = {};
    Object.assign(newState, prevState);
    action.payload.ingredients.forEach((ingredient: string) => {
        if (newState.hasOwnProperty(ingredient)) {
            newState[ingredient] -= 1;
            if (newState[ingredient] === 0) {
                delete newState[ingredient];
            }
        }
    });
    return newState;
}