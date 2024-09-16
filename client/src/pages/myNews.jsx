// // Exporting the MyNews component
// export default function MyNews() {
//     return (
//         <div className="container text-center py-4">
//             <main>
//                 <h1>My Feed</h1>

//                 {/* Row for Favorite Widget 1 */}
//                 <div className="row mb-3">
//                     <div className="col-12">
//                         <div className="bg-light p-4" style={{ height: '200px' }}>Favorite Widget 1</div>
//                     </div>
//                 </div>

//                 {/* Row for Favorite Widgets 2-4 */}
//                 <div className="row">
//                     <div className="col-md-4 p-2">
//                         <div className="bg-light p-4" style={{ height: '150px' }}>Favorite Widget 2</div>
//                     </div>
//                     <div className="col-md-4 p-2">
//                         <div className="bg-light p-4" style={{ height: '150px' }}>Favorite Widget 3</div>
//                     </div>
//                     <div className="col-md-4 p-2">
//                         <div className="bg-light p-4" style={{ height: '150px' }}>Favorite Widget 4</div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }


// import { useQuery } from '@apollo/client';
// import { GET_NEWS_BY_PREFERENCES } from '../utils/queries';
// import { useAuth } from '../utils/useAuth';

// export default function MyNews() {
//     const { user, loading: authLoading, error: authError } = useAuth();

//     if (authLoading) return <p>Loading user data...</p>;
//     if (authError) return <p>Error fetching user data</p>;

//     if (!user || !user._id) return <p>User not authenticated</p>;

//     const { loading, error, data } = useQuery(GET_NEWS_BY_PREFERENCES, {
//         variables: { userId: user._id },
//     });

//     if (loading) return <p>Loading your feed...</p>;
//     if (error) return <p>Error fetching personalized news</p>;

//     return (
//         <div className="container text-center py-4">
//             <main>
//                 <h1>My Feed</h1>
//                 <div className="row">
//                     {data.getNewsByPreferences.length > 0 ? (
//                         data.getNewsByPreferences.map((article, index) => (
//                             <div className="col-md-4 p-2" key={index}>
//                                 <div className="bg-light p-4" style={{ height: '200px' }}>
//                                     <h5>{article.title}</h5>
//                                     <p>{article.description}</p>
//                                     {article.image_url && (
//                                         <img src={article.image_url} alt={article.title} style={{ width: '100%' }} />
//                                     )}
//                                     <a href={article.url} target="_blank" rel="noopener noreferrer">
//                                         Read more
//                                     </a>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No news available based on your preferences.</p>
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// }


import { useQuery } from '@apollo/client';
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
    const { loading: loadingPreferences, error: errorPreferences, data: dataPreferences } = useQuery(GET_NEWS_BY_PREFERENCES, {
        variables: { userId },
    });

    const { loading: loadingGeneral, error: errorGeneral, data: dataGeneral } = useQuery(GET_GENERAL_NEWS);

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
