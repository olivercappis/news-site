import { useQuery } from '@apollo/client';
import { GET_GENERAL_NEWS } from '../utils/queries';

const GlobalLandingPage = () => {
  const { loading, error, data } = useQuery(GET_GENERAL_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching news</p>;

  return (
    <div className="container text-center py-4">
      <main>
        <h1>Global YouNews</h1>
        <div className="row">
          {data.getGeneralNews.map((article, index) => (
            <div className="col-md-4 p-2" key={index}>
              <div className="bg-light p-4">
                <h5>{article.title}</h5>
                <p>{article.description}</p>
                {article.image_url && (
                  <img src={article.image_url} alt={article.title} style={{ width: '100%' }} />
                )}
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GlobalLandingPage;
