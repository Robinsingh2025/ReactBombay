import React from 'react';
import Step from './Step';
// import recipeData from './RecipeData';

function RecipePage({ item }) {
  return (
    <main>
      <h1>{item.name}</h1>
      <div className='banner'>
        <img src={item.image} alt={item.name} />
      </div>
      <ol>
        {item.steps.map((step, index) => (
          <li key={`steplink${index}`}>
            <a href={`#step${index + 1}`}>{step.name}</a>
          </li>
        ))}
      </ol>
      {item.steps.map((step, index) => (
        <Step key={`${step.name}-${index}`} step={step} index={index} />
      ))}
    </main>
  );
}

export default RecipePage;
