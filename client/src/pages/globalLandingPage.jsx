const GlobalLandingPage = () => {
  return (
    <div className="container text-center py-4">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-around mb-4">
          <button className="btn btn-outline-primary">Home</button>
          <button className="btn btn-outline-primary">My News</button>
          <button className="btn btn-outline-primary">Settings</button>
          <button className="btn btn-outline-primary">Search</button>
          <button className="btn btn-outline-danger">Sign Out</button>
        </nav>
      </header>

      <main>
        <h1>Global News</h1>
        <div className="row">
          <div className="col-md-4 p-2">
            <div className="bg-light p-4">Global News Widget 1</div>
          </div>
          <div className="col-md-4 p-2">
            <div className="bg-light p-4">Widget 2</div>
          </div>
          <div className="col-md-4 p-2">
            <div className="bg-light p-4">Widget 3</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GlobalLandingPage;
