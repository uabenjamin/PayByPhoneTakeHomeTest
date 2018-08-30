import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { getUniqueIngredients } from "../../reducers/ingredients";
import * as style from "./style.css";

interface OwnProps {}

interface StateProps {
    uniqueIngredients: string[];
}

interface DispatchProps {}

interface Props extends OwnProps, StateProps, DispatchProps {}

function mapStateToProps(rootState: RootState, ownProps: OwnProps): StateProps {
    return {
        uniqueIngredients: getUniqueIngredients(rootState.ingredients),
    };
}

class UniqueIngredients extends React.Component<Props> {
    render() {
        return (
            <div className={style.uniqueIngredientsContainer}>
                <div className={style.title}>Unique Ingredients</div>
                { this.props.uniqueIngredients.length > 0 ? 
                <div className={style.uniqueIngredientsList}>
                    {this.props.uniqueIngredients.map((ingredient) => {
                        return <div className={style.uniqueIngredient} key={ingredient}>{ingredient}</div>;
                    })}
                </div> : <div className={style.message}>No Recipe Selected</div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)( UniqueIngredients as any);