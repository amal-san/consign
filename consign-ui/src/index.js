import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Provider } from "react-redux"



const client = new ApolloClient({ uri:'http://localhost:4000/', cache: new InMemoryCache });


ReactDOM.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById('root') 
);

reportWebVitals();
