import React from 'react';
import uuid from 'uuid';

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

  editRecipe(id) {
    this.setState({editing: true});
  }

  edit(newRecipe, id) {
    this.props.updateRecipe(newRecipe, id);
  }

  saveEdit() {
    let newRecipe = {
      id: uuid.v4(),
      menu: this.refs.editedTitle.value,
      ingredients: this.refs.editedIngredients.value
    }
    this.edit(newRecipe, this.props.index);
    this.setState({editing: false});
  }

  renderNormal() {
    return (
      <div className='card spacing'>
        <h3 className="card-header">{this.props.item.menu}</h3>
        <div className='card-block'>
          <ul className="list-group">
              {
                this.props.item.ingredients.map((item, i) => {
                  return (
                    <li className="list-group-item" index={i} key={i}>{item}</li>
                  );
                })
              }
          </ul>
        </div>
        <div>
          <button type="button" onClick={this.editRecipe.bind(this, this.props.item.id)} className="btn btn-outline-primary btn-spacing">Edit</button>
          <button type="button" onClick={this.deleteRecipe.bind(this, this.props.item.id)} className="btn btn-outline-danger btn-spacing">Delete</button>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
    <div className="container">
      <div className="card">
        <h4 className="card-title text-center">Edit Recipe</h4>
        <div className="card-block">
          <form>
          <div className="form-group">
            <input className="form-control" ref="editedTitle" defaultValue={this.props.item.menu} type="text" style={{width: "20rem"}} />
          </div>
          <div className="form-group">
            <textarea className="form-control" ref="editedIngredients" defaultValue={this.props.item.ingredients} style={{width: "25rem"}}></textarea>
          </div>
          <button type="button" className="btn btn-success" onClick={this.saveEdit.bind(this, this.props.item.id)}>Save</button>
        </form>
      </div>
     </div>
    </div>
    );
  }

  render() {
   if(this.state.editing) {
     return this.renderForm();
   } else {
     return this.renderNormal();
   }
  }
}

export default RecipeItem;