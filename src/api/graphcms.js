import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_ACCESS_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GRAPHCMS_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
});

export default client;
