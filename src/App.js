import React from 'react';
import uuid from 'uuid';
import Home from './components/Home';
import Recipe from './components/Recipe';
import AddRecipe from './components/addRecipe';
import Footer from './components/footer';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      recipes: []
    }
  }

  componentWillMount() {
    this.setState({recipes: [
      {
        id: uuid.v4(),
        menu: "Kachumbari",
        ingredients: ["Onions", "Tomatoes", "Pepper"]
      },
      {
        id: uuid.v4(),
        menu: "Pilau",
        ingredients: ["Rice grains", "Pilau", "Binziari", "Onions"]
      },
      {
        id: uuid.v4(),
        menu: "Ugali Stew",
        ingredients: ["Maize flour", "Kales", "Red meat", "Tomatoes", "Onions"]
      },
      {
        id: uuid.v4(),
        menu: "Pooding",
        ingredients: ["Avocado", "Pawpaw", "Pineapple", "Apple", "Passion fruit"]
      }
    ]})
  }
  
  handleAddRecipe(recipe) {
    let recipes = this.state.recipes;
    recipes.push(recipe);
    this.setState({recipes:recipes});
  }

  handleDeleteRecipe(id) {
    let recipes = this.state.recipes;
    let index =recipes.findIndex(i => i.id === id);
    recipes.splice(index, 1);
    this.setState({recipes: recipes});
  }

  handleEditRecipe(id) {
    return (
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

  render() {
    return (
      <div>
        <Home />
        <Recipe recipes={this.state.recipes} onDelete={this.handleDeleteRecipe.bind(this)} />
        <AddRecipe onEdit={this.handleEditRecipe.bind(this)} addRecipe={this.handleAddRecipe.bind(this)} />  
        <Footer />
      </div>
    );
  }
}

export default App;
