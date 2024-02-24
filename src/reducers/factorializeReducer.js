import { createSlice } from '@reduxjs/toolkit';

export const factorializeSlice = createSlice({
  name: 'factorialize',
  initialState: {
    value: '',
  },
  reducers: {
    // Czy calculateFactorialize musi byc reducerem? Moze wystarczylaby zwykla funkcja?
    calculateFactorialize: (state, action) => {
      function calculateFactorializeFunction(n) {
        let fact = 1n;
        for (let i = 2n; i <= n; i++) {
          fact *= i;
        }
        return fact.toString();
      }
      state.value = calculateFactorializeFunction(action.payload);
    },
  },
});

export const { calculateFactorialize } = factorializeSlice.actions;

export default factorializeSlice.reducer;
