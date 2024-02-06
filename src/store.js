import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import factorializeReducer, {
  calculateFactorialize,
} from './reducers/factorializeReducer';
import loginReducer from './reducers/loginReducer';
import factorializeArrayReducer from './reducers/factorializeArrayReducer';
import { pushTofactorializeArray } from './reducers/factorializeArrayReducer';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: calculateFactorialize,
  serializableCheck: false,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(
      pushTofactorializeArray(listenerApi.getState().factorialize.value)
    );
  },
});

export default configureStore({
  reducer: {
    factorialize: factorializeReducer,
    login: loginReducer,
    factorializeArray: factorializeArrayReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(
      listenerMiddleware.middleware
    ),
});
