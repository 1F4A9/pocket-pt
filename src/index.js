import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Normalize from './styles/Normalize';
import GlobalStyle from './styles/GlobalStyle';
import { ApolloProvider } from '@apollo/client';

import client from './api/graphcms';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
