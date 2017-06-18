import React from 'react';

class AddRecipe extends React.Component {
  render() {
    return(
      <div className="card">
        <h3 className="card-title">Add Recipe</h3>
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
        </form>
        </div>
      </div>
    );
  }
}

export default AddRecipe;