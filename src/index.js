import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <GoogleOAuthProvider clientId="831793152499-8ptk71gtdjt7kcum9odr3gs7ukukskfh.apps.googleusercontent.com">
     <App />
     </GoogleOAuthProvider>
  </Provider>
);
