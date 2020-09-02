import React from 'react';
import Recipeitem from './Recipeitem';

const Recipe=(props)=>{
    const {recipe} = props;
    return(
        <div className="row">
            {
                recipe.map(rec=>(<Recipeitem name={rec.recipe.label} image={rec.recipe.image}
                     ingredientLines={rec.recipe.ingredientLines} source={rec.recipe.url}/>))
                 
            }
           
        </div>
    );
}
export default Recipe;