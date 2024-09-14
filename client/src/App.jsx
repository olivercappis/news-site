// App.jsx
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavBar from './components/navbar';
import { Outlet } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <Outlet /> {/* This renders the child route (like Login, Signup, etc.) */}
    </ApolloProvider>
  );
}

export default App;
