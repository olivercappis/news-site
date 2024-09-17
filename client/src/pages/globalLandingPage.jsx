import { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_GENERAL_NEWS, SEARCH_NEWS } from '../utils/queries';

const GlobalLandingPage = () => {
  const { loading, error, data } = useQuery(GET_GENERAL_NEWS);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  // Lazy query for search functionality
  const [searchNews, { loading: searchLoading, error: searchError }] = useLazyQuery(SEARCH_NEWS, {
    onCompleted: (data) => {
      setSearchResults(data.searchNews); // Update search results when query completes
    },
  });

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      searchNews({ variables: { searchTerm } });
    }
  };

  if (loading) return <p>Loading global news...</p>;
  if (error) return <p>Error fetching global news</p>;

  return (
    <div className="container text-center py-4">
      <main>
        <h1>Global YouNews</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-2">Search</button>
        </form>

        {/* Global news */}
        <div className="row">
          {data.getGeneralNews.map((article, index) => (
            <div className="col-md-4 p-2" key={index}>
              <div className="bg-light p-4">
                <h5>{article.title}</h5>
                <p>{article.description}</p>
                {article.image_url && (
                  <img src={article.image_url} alt={article.title} style={{ width: '100%' }} />
                )}
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
          ))}
        </div>

        {/* Search results */}
        {searchLoading && <p>Loading search results...</p>}
        {searchError && <p>Error loading search results</p>}
        {searchResults && (
          <div className="container text-center py-4">
            <h2>Search Results</h2>
            <div className="row">
              {searchResults.map((article, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="bg-light p-4">
                    <h5>{article.title}</h5>
                    <p>{article.description}</p>
                    {article.image_url && (
                      <img src={article.image_url} alt={article.title} style={{ width: '100%' }} />
                    )}
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GlobalLandingPage;
