import React from 'react';
import '../../src/App.css';
import RecipeItem from './recipeItem';
import AddRecipe from './addRecipe';

class Recipe extends React.Component {
  render() {
    let recipeItem;
    if (this.props.recipes) {
      recipeItem = this.props.recipes.map((item, i) => {
        return (
          <RecipeItem item={item} key={i} />
        );
      })
    }
    return(
      <div className="container">
        <div className="jumbotron">
          {recipeItem}
        </div>
        <div>
          <button type="button" className="btn btn-primary btn-lg">Add Recipe</button>
        </div>
        <div className="text-center">
          <p className="lead">BY Edwin Moses Lomolo</p>
        </div>
      </div>
    );
  }
}

export default Recipe;