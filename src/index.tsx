import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './assets/css/global';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const payPalOptions = {
  'client-id': "AV0QbPIMrrtq7A0coXrk4UY2ix5B9lDtEadqlLg0_UFlpzoS5S9nlBm4zQYLpI0sRW8FUOJHMwEoTqDg",
  currency: "BRL"
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider options={payPalOptions}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
