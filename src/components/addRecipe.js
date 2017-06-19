import React from 'react';
import uuid from 'uuid';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      newRecipe: {}
    }
  }

  handleSubmit(e) {
    if (this.refs.menu.value === "" && this.refs.ingredients.value === "") {
      alert("Menu title and Ingredients can't be Empty!");
    } else {
      this.setState({newRecipe: {
        id: uuid.v4(),
        menu: this.refs.menu.value,
        ingredients: this.refs.ingredients.value
      }}, function() {
        this.props.addRecipe(this.state.newRecipe);
      });
    }
    e.preventDefault();
  }

  render() {
    return(
    <div className="container">
      <div className="card" style={{width: "30rem"}}>
        <h3 className="card-title text-center">Add Recipe</h3>
        <div className="card-block">
          <form onSubmit={this.handleSubmit.bind(this)}>
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
}

export default AddRecipe;