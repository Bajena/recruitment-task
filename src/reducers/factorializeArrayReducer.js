import { createSlice } from '@reduxjs/toolkit';

export const factorializeArraySlice = createSlice({
  name: 'factorializeArray',
  initialState: {
    value: [],
  },
  reducers: {
    pushTofactorializeArray: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { pushTofactorializeArray } = factorializeArraySlice.actions;

export default factorializeArraySlice.reducer;
