import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import factorializeReducer, { calculateFactorialize } from './reducer';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: calculateFactorialize,
  effect: async (action) => {
    console.log('middleware effect action payload', action.payload);
  },
});

export default configureStore({
  reducer: {
    factorialize: factorializeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
