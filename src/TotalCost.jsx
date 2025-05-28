import React from 'react';
import { useSelector } from 'react-redux';
import "./TotalCost.css";

const TotalCost = ({ handleClick, ItemsDisplay }) => {
  const venueItems = useSelector((state) => state.venue);
  const avItems = useSelector((state) => state.av);
  const meals = useSelector((state) => state.meals);

  const calculateTotal = () => {
    const venueTotal = venueItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
    const avTotal = avItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
    const mealTotal = meals.reduce((sum, item) => item.selected ? sum + item.cost : sum, 0);

    return {
      venueTotal,
      avTotal,
      mealTotal,
      grandTotal: venueTotal + avTotal + mealTotal
    };
  };

  const { venueTotal, avTotal, mealTotal, grandTotal } = calculateTotal();

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Total cost for the event</h3></p>
        </div>

        <div className="cost-breakdown">
          <p><strong>Venue:</strong> ${venueTotal}</p>
          <p><strong>AV Add-ons:</strong> ${avTotal}</p>
          <p><strong>Meals:</strong> ${mealTotal}</p>
          <hr />
          <h2 id="pre_fee_cost_display" className="price">Grand Total: ${grandTotal}</h2>
        </div>

        <button className="back-btn" onClick={handleClick}>Back</button>
        {ItemsDisplay && <ItemsDisplay />}
      </div>
    </div>
  );
};

export default TotalCost;
