// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2017/06/02/18/24/salmon-2367029_1280.jpg",
      name: "Grilled Salmon with Veggies",
      cost: 25,
      selected: false,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      name: "Deluxe Cheese Pizza",
      cost: 15,
      selected: false,
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/06/18/16/05/lunch-3482749_1280.jpg",
      name: "Chicken Caesar Salad",
      cost: 20,
      selected: false,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/07/16/10/43/sushi-2506432_1280.jpg",
      name: "Sushi Platter",
      cost: 30,
      selected: false,
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/03/28/08/37/pasta-4971142_1280.jpg",
      name: "Italian Pasta Combo",
      cost: 22,
      selected: false,
    }
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
      const index = action.payload;
      state[index].selected = !state[index].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
