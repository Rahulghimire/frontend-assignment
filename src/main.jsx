import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

let persistor = persistStore(store);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </QueryClientProvider>
    </Provider>
    ,
)
