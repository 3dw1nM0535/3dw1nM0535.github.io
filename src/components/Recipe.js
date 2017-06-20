import React from 'react';
import '../../src/App.css';
import RecipeItem from './recipeItem';

class Recipe extends React.Component {
  deleteRecipe(id) {
    this.props.onDelete(id);
  }

  render() {
    let recipeItem;
    if (this.props.recipes) {
      recipeItem = this.props.recipes.map((item, i) => {
        return (
          <RecipeItem onDelete={this.deleteRecipe.bind(this)} item={item} key={i} />
        );
      })
    }
    return(
      <div className="container">
        <div className="jumbotron">
          {recipeItem}
        </div>
      </div>
    );
  }
}

export default Recipe;