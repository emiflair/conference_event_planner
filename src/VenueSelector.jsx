import React from 'react';
import { useDispatch } from 'react-redux';
// import { setVenue } from './venueSlice'; //

const VenueSelector = () => {
  const dispatch = useDispatch();

  const handleVenueChange = (event) => {
    const [name, cost] = event.target.value.split(',');
    dispatch(setVenue({ name, cost: parseInt(cost) }));
  };

  return (
    <div className="selector">
      <h2>Select Venue</h2>
      <select onChange={handleVenueChange} defaultValue="">
        <option value="" disabled>Select a venue</option>
        <option value="Banquet Hall,500">Banquet Hall — $500</option>
        <option value="Conference Room,300">Conference Room — $300</option>
        <option value="Outdoor Lawn,700">Outdoor Lawn — $700</option>
      </select>
    </div>
  );
};

export default VenueSelector;
