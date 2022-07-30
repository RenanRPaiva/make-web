import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import orderReducer from './slices/ordersSlice';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: {
    user: userSlice,
    orders: orderReducer,
  },
  middleware: getDefaultMiddlewares => {
    const middlewares = getDefaultMiddlewares();
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
