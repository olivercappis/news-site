// App.jsx
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import { useState } from 'react'; // Import useState to store search results
import NavBar from './components/navbar'; // Import NavBar
import { Outlet } from 'react-router-dom'; // Outlet for rendering child routes
import { GET_SEARCH_NEWS } from './utils/queries'; // Import the search query

// Set up Apollo Client
const client = new ApolloClient({
  uri: '/graphql', // Your GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  const [searchResults, setSearchResults] = useState([]); // State for storing search results
  const [searchPerformed, setSearchPerformed] = useState(false); // State to check if search has been performed

  const searchNews = async (query) => {
    try {
      const { data } = await client.query({
        query: GET_SEARCH_NEWS,
        variables: { query }
      });
      console.log(data.searchNews); // Handle and display the search results
      setSearchResults(data.searchNews); // Store the search results in state
      setSearchPerformed(true); // Indicate that a search was performed
    } catch (error) {
      console.error('Error searching news:', error);
    }
  };

  return (
    <ApolloProvider client={client}>
      {/* Pass searchNews function to NavBar */}
      <NavBar onSearch={searchNews} />
      <Outlet /> {/* Renders child routes like Login, Signup, etc. */}

      {/* Search Results Section */}
      {searchPerformed && (
        <div className="container mt-4">
          <h2>Search Results</h2>
          {searchResults.length > 0 ? (
            <div className="row">
              {searchResults.map((article, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4">
                    <img src={article.image_url} className="card-img-top" alt={article.title} />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No articles found for your search.</p>
          )}
        </div>
      )}
    </ApolloProvider>
  );
}

export default App;
