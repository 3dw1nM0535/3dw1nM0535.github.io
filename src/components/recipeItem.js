import React from 'react';

class RecipeItem extends React.Component {
  deleteRecipe(id) {
    this.props.onDelete(id);
  }

  editRecipe(id) {
    return (
      <div className="container">
        <div className="card" style={{width: "30rem"}}>
          <h3 className="card-title text-center">Add Recipe</h3>
          <div className="card-block">
            <form>
            <div className="form-group">
              <label className="form-control-label">Menu Title</label>
              <input className="form-control" ref="menu" type="text" />
            </div>
            <div className="form-group">
              <label className="form-control-label">Ingredients</label>
              <textarea className="form-control" ref="ingredients"></textarea>
            </div>
            <div>
              <input type="submit" className="btn btn-outline-primary btn-sm" value="Submit" />
            </div>
          </form>
          </div>
        </div>
      </div>
    );
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
          <button type="button" onClick={this.editRecipe.bind(this)} className="btn btn-outline-primary btn-spacing">Edit</button>
          <button type="button" onClick={this.deleteRecipe.bind(this, this.props.item.id)} className="btn btn-outline-danger btn-spacing">Delete</button>
        </div>
      </div>
    );
  }
}

export default RecipeItem;