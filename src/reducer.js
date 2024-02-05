import { createSlice } from '@reduxjs/toolkit';

export const powerSlice = createSlice({
  name: 'power',
  initialState: {
    value: 0,
  },
  reducers: {
    calculatePower: (state, action) => {
      const calculatePowerFunction = (n) => {
        if (n > 1) return n * calculatePowerFunction(n - 1);
        return 1;
      };

      state.value = calculatePowerFunction(action.payload);
    },
  },
});

export const { calculatePower } = powerSlice.actions;

export default powerSlice.reducer;
