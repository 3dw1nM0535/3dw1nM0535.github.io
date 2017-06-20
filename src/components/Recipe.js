import React from 'react';
import '../../src/App.css';
import RecipeItem from './recipeItem';

class Recipe extends React.Component {
  deleteRecipe(id) {
    this.props.onDelete(id);
  }

  edit(newRecipe, id) {
    this.props.updateRecipe(newRecipe, id);
  }

  render() {
    let recipeItem;
    if (this.props.recipes) {
      recipeItem = this.props.recipes.map((item, i) => {
        return (
          <RecipeItem updateRecipe={this.edit.bind(this)} onDelete={this.deleteRecipe.bind(this)} item={item} key={i} />
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