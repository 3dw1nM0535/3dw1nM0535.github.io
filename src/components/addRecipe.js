import React from 'react';
import uuid from 'uuid';
import '../../src/App.css';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      newRecipe: {}
    }
  }

  handleSubmit(e) {
    if (this.refs.menu.value === "" && this.refs.ingredients.value === "") {
      alert("Menu Title and Ingredients can't be Empty!");
    } else {
      this.setState({newRecipe: {
        id: uuid.v4(),
        menu: this.refs.menu.value,
        ingredients: this.refs.ingredients.value.split(",")
      }}, function() {
        this.props.addRecipe(this.state.newRecipe);
      });
      this.refs.menu.value = '';
      this.refs.ingredients.value = '';
    }
    e.preventDefault();
  }

  render() {
    return(
    <div className="container text-center">
      <h4 className="display-4">Add Recipe</h4>
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form-control mb-2 mr-sm-4 mb-sm-0" placeholder="Menu Title" ref="menu" type="text" />
        <textarea className="form-control mb-2 mr-sm-4 mb-sm-0" ref="ingredients" placeholder="Ingredients"></textarea>
        <input type="submit" className="btn btn-outline-primary btn-sm" value="Submit" />
      </form>
     </div>
    );
  }
}

export default AddRecipe;