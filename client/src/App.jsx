import NavBar from './components/navbar.jsx';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext'; // Import the provider

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
