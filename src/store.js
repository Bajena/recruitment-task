import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import powerReducer, { calculatePower } from './reducer';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: calculatePower,
  effect: async (action) => {
    console.log('middleware effect action payload', action.payload);
  },
});

export default configureStore({
  reducer: {
    power: powerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
