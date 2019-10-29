import React from 'react';
import Instructions from './Instructions';
// import InstructionSlides from "./InstructionSlides";

function Step({ step, index }) {
  return (
    <div id={`step${index + 1}`}>
      <h1>{step.name}</h1>
      <div>
        <h3>Ingredients</h3>
        <ol>
          {step.ingredients.map(ingredient => (
            <li
              key={`${ingredient.measurement}-${ingredient.name}-${ingredient.id}`}
            >
              {ingredient.measurement} of{' '}
              {ingredient.id ? (
                <a href={ingredient.id}>{ingredient.name}</a>
              ) : (
                ingredient.name
              )}
            </li>
          ))}
        </ol>
        <h3>Instructions</h3>
        <Instructions instructions={step.instructions} />
        {/* <InstructionSlides instructions={step.instructions} /> */}
      </div>
    </div>
  );
}

export default Step;
