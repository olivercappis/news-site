import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_NEWS_BY_PREFERENCES, GET_GENERAL_NEWS } from '../utils/queries';
import AuthService from '../utils/auth'; // Import AuthService to manage token and user ID

export default function MyNews() {
    // Try to get user data from the token
    const profile = AuthService.getProfile();
    const userId = profile?._id; // Ensure userId is only accessed if it exists

    if (!userId) {
        return <p>Please log in to view your personalized news.</p>; // Handle the case where userId is not available
    }

    // Query for news based on user preferences
    const { loading: loadingPreferences, error: errorPreferences, data: dataPreferences, refetch: refetchPreferences } = useQuery(GET_NEWS_BY_PREFERENCES, {
        variables: { userId },
    });

    const { loading: loadingGeneral, error: errorGeneral, data: dataGeneral, refetch: refetchGeneral } = useQuery(GET_GENERAL_NEWS);

    useEffect(() => {
        const refetchData = async () => {
            if (dataPreferences) {
                await refetchPreferences(); // Refetch news by preferences
            } else {
                await refetchGeneral(); // Fallback to general news if no preferences
            }
        };

        // Refetch news if preferences data changes or on initial load
        refetchData();
    }, [dataPreferences, refetchPreferences, refetchGeneral]);

    if (loadingPreferences || loadingGeneral) return <p>Loading...</p>;
    if (errorPreferences || errorGeneral) return <p>Error: {errorPreferences?.message || errorGeneral?.message}</p>;

    // Use user-preference news if available, otherwise fall back to general news
    console.log(dataPreferences)
    const articles = dataPreferences ? dataPreferences.getNewsByPreferences : dataGeneral.getGeneralNews;

    return (
        <div className="container text-center py-4">
            <main>
                <h1>My Feed</h1>

                <div className="row">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <div key={index} className="col-md-4 p-2">
                                <div className="bg-light p-4" style={{ height: '150px' }}>
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                    {article.image_url && (
                                        <img src={article.image_url} alt={article.title} style={{ width: '100%' }} />
                                    )}
                                    <a href={article.url}>Read more</a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No news available</p>
                    )}
                </div>
            </main>
        </div>
    );
}