import React from 'react';
import RecipeItem from './recipeItem';

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
        <div className="text-center">
          <p className="lead">BY Edwin Moses Lomolo</p>
        </div>
      </div>
    );
  }
}

export default Recipe;