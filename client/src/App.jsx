// App.jsx

import NavBar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This renders the child route (like Login, Signup, etc.) */}
    </>
  );
}

export default App;
