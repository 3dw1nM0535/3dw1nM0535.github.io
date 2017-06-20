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
    <div className="container">
      <div className="card" style={{width: "40rem"}}>
        <h4 className="card-title text-center">Add Recipe</h4>
        <div className="card-block">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input className="form-control" placeholder="Menu Title" ref="menu" type="text" style={{width: "15rem"}} />
          </div>
          <div className="form-group">
            <textarea className="form-control" ref="ingredients" placeholder="Ingredients" style={{width: "20rem"}}></textarea>
          </div>
          <input type="submit" className="btn btn-primary btn-md" value="Submit" />
        </form>
      </div>
     </div>
    </div>
    );
  }
}

export default AddRecipe;