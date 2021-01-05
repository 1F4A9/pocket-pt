import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Normalize from './styles/Normalize';
import GlobalStyle from './styles/GlobalStyle';
import { ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';

import client from './api/graphcms';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri="http://localhost:3000/programs"
    >
      <ApolloProvider client={client}>
        <Normalize />
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
