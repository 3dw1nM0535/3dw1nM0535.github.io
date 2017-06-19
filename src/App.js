import React from 'react';
import uuid from 'uuid';
import Home from './components/Home';
import Recipe from './components/Recipe';
import AddRecipe from './components/addRecipe';
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

  render() {
    return (
      <div>
        <Home />
        <Recipe recipes={this.state.recipes} />
        <AddRecipe />  
      </div>
    );
  }
}

export default App;
