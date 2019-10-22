import React from 'react';
import Step from './Step';
import recipeData from './RecipeData';

class RecipePage extends React.Component {
  render() {
    console.log(recipeData);
    const recipeItems = recipeData.map(item => {
      return (
        <main>
          <h1>{item.title}</h1>
          <div className='banner'>
            <img src={item.image} alt={item.title} />
          </div>
          <h2>Step {item.steps.map(step => step.number)}</h2>
          <ol>
            {item.steps.map((step, index) => (
              <li>
                <a href={`#step${index + 1}`}>{step.name}</a>
              </li>
            ))}
          </ol>
          {item.steps.map((step, index) => (
            <Step step={step.number} index={index} />
          ))}
        </main>
      );
    });
    return <div>{recipeItems}</div>;
  }
}

export default RecipePage;
