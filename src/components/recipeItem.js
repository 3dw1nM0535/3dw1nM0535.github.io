import React from 'react';

class RecipeItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false
    }
  }
  
  deleteRecipe(id) {
    this.props.onDelete(id);
  }

  editRecipe() {
    alert("Editing Recipe!");
  }

  render() {
    return(
      <div className='card spacing'>
        <h3 className="card-header">{this.props.item.menu}</h3>
        <div className='card-block'>
          <ul className="list-group">
              {
                this.props.item.ingredients.map((item, i) => {
                  return (
                    <li className="list-group-item" key={i}>{item}</li>
                  );
                })
              }
          </ul>
        </div>
        <div>
          <button type="button" onClick={this.editRecipe} className="btn btn-outline-primary btn-spacing">Edit</button>
          <button type="button" onClick={this.deleteRecipe.bind(this, this.props.item.id)} className="btn btn-outline-danger btn-spacing">Delete</button>
        </div>
      </div>
    );
  }
}

export default RecipeItem;