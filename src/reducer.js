import { createSlice } from '@reduxjs/toolkit';

export const factorializeSlice = createSlice({
  name: 'factorialize',
  initialState: {
    value: 0,
  },
  reducers: {
    calculateFactorialize: (state, action) => {
      const calculateFactorializeFunction = (n) => {
        if (n > 1) return n * calculateFactorializeFunction(n - 1);
        return 1;
      };

      state.value = calculateFactorializeFunction(action.payload);
    },
  },
});

export const { calculateFactorialize } = factorializeSlice.actions;

export default factorializeSlice.reducer;
