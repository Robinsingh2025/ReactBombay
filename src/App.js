import React, { useState, useEffect } from 'react';
import RecipePage from './Components/RecipePage';
import Nav from './Components/Nav';
import recipeData from './RecipeData';
// import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setData(recipeData);
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  }
  console.log(recipeData);
  return (
    <div>
      <Nav items={data} setIndex={setIndex} />
      <RecipePage item={data[index]} />
    </div>
  );
}
