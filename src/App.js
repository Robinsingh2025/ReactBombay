import React, { useState, useEffect } from 'react';
import RecipePage from './Components/RecipePage';
import recipeData from './RecipeData';
// import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(recipeData);
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Hello
      <RecipePage item={data[0]} />
    </div>
  );
}
