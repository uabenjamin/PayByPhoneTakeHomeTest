import { RecipeActions } from "../containers/recipe/actions";

export enum ActionTypes {
    RECIPE_SELECTED = "RECIPE_SELECTED",
    RECIPE_UNSELECTED = "RECIPE_UNSELECTED",
}

export type AllActions = RecipeActions;