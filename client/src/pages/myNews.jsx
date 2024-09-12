// Exporting the MyNews component
export default function MyNews() {
    return (
        <div className="container text-center py-4">
            <main>
                <h1>My Feed</h1>

                {/* Row for Favorite Widget 1 */}
                <div className="row mb-3">
                    <div className="col-12">
                        <div className="bg-light p-4" style={{ height: '200px' }}>Favorite Widget 1</div>
                    </div>
                </div>

                {/* Row for Favorite Widgets 2-4 */}
                <div className="row">
                    <div className="col-md-4 p-2">
                        <div className="bg-light p-4" style={{ height: '150px' }}>Favorite Widget 2</div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="bg-light p-4" style={{ height: '150px' }}>Favorite Widget 3</div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="bg-light p-4" style={{ height: '150px' }}>Favorite Widget 4</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
