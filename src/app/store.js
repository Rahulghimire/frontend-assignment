import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

const reducer = combineReducers({
    cart: cartReducer,
  });

const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

// const store = configureStore({
//     reducer: {
//         cart:cartReducer,
//     },
//   })

  export default store