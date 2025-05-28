// src/AVSelector.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAvQuantity, decrementAvQuantity } from './avSlice';
import './AVSelector.css'; // Create CSS later if needed

const AVSelector = () => {
  const avItems = useSelector((state) => state.av);
  const dispatch = useDispatch();

  return (
    <div className="av-selector">
      <h2>Audio/Visual Options</h2>
      <ul className="av-list">
        {avItems.map((item, index) => (
          <li key={index} className="av-item">
            <span>{item.name} — ${item.cost}</span>
            <div className="av-controls">
              <button onClick={() => dispatch(decrementAvQuantity(index))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementAvQuantity(index))}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AVSelector;
