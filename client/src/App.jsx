// App.jsx
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavBar from './components/navbar'; // Import NavBar
import { Outlet } from 'react-router-dom'; // Outlet for rendering child routes

// Set up Apollo Client
const client = new ApolloClient({
  uri: '/graphql', // Your GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Include NavBar and Outlet for rendering different pages */}
      <NavBar />
      <Outlet /> {/* Renders child routes like Login, Signup, etc. */}
    </ApolloProvider>
  );
}

export default App;
