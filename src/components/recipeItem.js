import React from 'react';

class RecipeItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false
    }
  }

  deleteRecipe(i) {
    this.props.onDelete(i);
  }

  editRecipe(id) {
    this.setState({editing: true});
  }

  saveEdit(e, i) {
    this.props.item.menu = this.refs.editedTitle.value;
    this.props.item.ingredients = this.refs.editedIngredients.value.split(",");
    this.setState({editing: false});
    e.preventDefault();
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
                    <li className="list-group-item" key={i}>{item}</li>
                  );
                })
              }
          </ul>
        </div>
        <div>
          <button type="button" onClick={this.editRecipe.bind(this)} className="btn btn-outline-primary btn-spacing">Edit</button>
          <button type="button" onClick={this.deleteRecipe.bind(this)} className="btn btn-outline-danger btn-spacing">Delete</button>
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
          <form onSubmit={this.saveEdit.bind(this)}>
          <div className="form-group">
            <input className="form-control" ref="editedTitle" defaultValue={this.props.item.menu} type="text" style={{width: "20rem"}} />
          </div>
          <div className="form-group">
            <textarea className="form-control" ref="editedIngredients" defaultValue={this.props.item.ingredients} style={{width: "25rem"}}></textarea>
          </div>
          <input type="submit" className="btn btn-success" value="Save" />
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