import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import ingredientsReducer, { IngredientsState } from "./ingredients";
import recipesReducer, { RecipesState } from "./recipes";

export interface RootState {
    router: RouterState;
    ingredients: IngredientsState;
    recipes: RecipesState;
}

export const rootReducer = combineReducers<RootState>({
    router: routerReducer,
    ingredients: ingredientsReducer,
    recipes: recipesReducer,
});
