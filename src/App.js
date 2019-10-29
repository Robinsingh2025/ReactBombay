import React from 'react';
import RecipePage from './Components/RecipePage';
import recipeData from './RecipeData';
// import './App.css';

// FIXME: Convert this to a function component that uses hooks
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  render() {
    const { data } = this.state;
    if (!data) {
      return <p>Loading...</p>;
    }
    return <RecipePage item={data[0]} />;
  }
  componentDidMount() {
    // fetch the recipe data
    const data = recipeData;
    this.setState({ data });
  }
}

export default App;
