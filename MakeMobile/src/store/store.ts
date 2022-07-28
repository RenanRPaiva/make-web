import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
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
