// MealSelector.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMealSelection } from './mealsSlice';
import './MealSelector.css';

const MealSelector = () => {
  const meals = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const handleMealClick = (index) => {
    dispatch(toggleMealSelection(index));
  };

  return (
    <div className="meal-selector-container">
      {meals.map((meal, index) => (
        <div
          key={index}
          className={`meal-card ${meal.selected ? 'selected' : ''}`}
          onClick={() => handleMealClick(index)}
        >
          <img src={meal.img} alt={meal.name} className="meal-image" />
          <h3>{meal.name}</h3>
          <p>${meal.cost}</p>
          <button className="meal-button">
            {meal.selected ? 'Remove' : 'Select'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MealSelector;
