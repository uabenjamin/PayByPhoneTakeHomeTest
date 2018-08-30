import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'src/reducers';
import Recipes from "../recipe";
import UniqueIngredients from "../uniqueingredients";

export interface Props extends RouteComponentProps<void> {
    recipeNames: string[];
}
export interface OwnProps {}
export interface StateProps {
    recipeNames: string[];
}
export interface DispatchProps {}

function mapStateToProps(rootState: RootState, ownProps: OwnProps): StateProps {
    return {
        recipeNames: Object.keys(rootState.recipes.allRecipes),
    };
}

class Main extends React.Component<Props> {
    render() {
        return (
            <div className={style.appContainer}>
                <div className={style.title}>Recipes</div>
                <div className={style.recipecontainer}>
                    {this.props.recipeNames.map((name) =>  <Recipes recipeName={name} />)}
                </div>
                <UniqueIngredients />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main)