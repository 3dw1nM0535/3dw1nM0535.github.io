import React from 'react';
import Home from './components/Home';
import Recipe from './components/Recipe';
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
        menu: "Kachumbari",
        ingredients: ["Onions", "Tomatoes", "Pepper"]
      },
      {
        menu: "Pilau",
        ingredients: ["Rice grains", "Pilau", "Binziari", "Onions"]
      },
      {
        menu: "Ugali Stew",
        ingredients: ["Unga flour", "Kales", "Red meat", "Tomatoes", "Onions"]
      },
      {
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
      </div>
    );
  }
}

export default App;
