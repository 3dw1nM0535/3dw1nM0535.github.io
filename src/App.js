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

  handleRecipeEdit(newEdit, i) {
    let recipes = this.state.recipes;
    recipes[i] = newEdit;
    this.setState({recipes: recipes});
  }

  render() {
    return (
      <div>
        <Home />
        <Recipe recipes={this.state.recipes} onDelete={this.handleDeleteRecipe.bind(this)} />
        <AddRecipe addRecipe={this.handleAddRecipe.bind(this)} />  
        <Footer />
      </div>
    );
  }
}

export default App;
