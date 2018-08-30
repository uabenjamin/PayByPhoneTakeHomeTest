import { ActionTypes } from "../../actions";

interface RecipeSelectedAction {
    type: ActionTypes.RECIPE_SELECTED
    payload: {
        recipeName: string;
        ingredients: string[];
    }
}

function createRecipeSelectedAction(recipeName: string, ingredients: string[]): RecipeSelectedAction {
    return {
        type: ActionTypes.RECIPE_SELECTED,
        payload: {
            recipeName,
            ingredients,
        }
    };
}
interface RecipeUnselectedAction {
    type: ActionTypes.RECIPE_UNSELECTED
    payload: {
        recipeName: string;
        ingredients: string[];
    }
}

function createRecipeUnselectedAction(recipeName: string, ingredients: string[]): RecipeUnselectedAction {
    return {
        type: ActionTypes.RECIPE_UNSELECTED,
        payload: {
            recipeName,
            ingredients,
        }
    };
}

type RecipeActions = RecipeSelectedAction | RecipeUnselectedAction;

export {
    RecipeActions,
    RecipeSelectedAction,
    createRecipeSelectedAction,
    RecipeUnselectedAction,
    createRecipeUnselectedAction
}