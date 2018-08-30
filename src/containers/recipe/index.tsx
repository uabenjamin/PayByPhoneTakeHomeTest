import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { RecipeModel } from 'models/recipemodel';
import * as style from "./style.css";
import {createRecipeSelectedAction, createRecipeUnselectedAction} from "./actions"
import { Dispatch } from "redux";

interface RecipeState {
    selected: boolean;
}

interface OwnProps {
    recipeName: string;
}

interface StateProps {
    recipeModel: RecipeModel;
}

interface DispatchProps {
    onSelect(name: string, ingredients: string[]): void;
    onUnselect(name: string, ingredients: string[]): void;
}

interface Props extends OwnProps, StateProps, DispatchProps {}

function mapStateToProps(rootState: RootState, ownProps: OwnProps): StateProps {
    return {
        recipeModel: rootState.recipes.allRecipes[ownProps.recipeName],
    };
}

function mapDispatchToProps(
    dispatch: Dispatch,
    ownProps: OwnProps
): DispatchProps {
    return {
        onSelect: (name: string, ingredients: string[]) => {
            dispatch(createRecipeSelectedAction(name, ingredients));
        },
        onUnselect: (name: string, ingredients: string[]) => {
            dispatch(createRecipeUnselectedAction(name, ingredients));
        },
    };
}

class Recipe extends React.Component<Props, RecipeState> {
    constructor(props: Props) {
        super(props);
        this.state = {selected: false};
        this.onClick = this.onClick.bind(this);
    }
    private onClick(): void {
        if (this.state.selected) {
            this.props.onUnselect(this.props.recipeModel.name, this.props.recipeModel.ingredients);
        } else {
            this.props.onSelect(this.props.recipeModel.name, this.props.recipeModel.ingredients);
        }
        this.setState((prevState) => {return {selected: !prevState.selected};});
    }
    render() {
        return (
            <div
                onClick={() => this.onClick()}
                className={`${style.recipe} ${this.state.selected ? style.selected : ""}`}
            >
            <div className={style.recipeName}>{this.props.recipeModel.name}</div>
            <div><span className={style.subtitle}>Cook Time:</span>{this.props.recipeModel.cook_time}</div>
            <div className={style.subtitle}>Ingredients:</div>
            <div className={style.ingredientsContainer}>
                {this.props.recipeModel.ingredients.map(
                    (ingredient) => <span className={style.ingredient}>{ingredient}</span>
                )}
            </div> 
        </div>
        
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipe as any);