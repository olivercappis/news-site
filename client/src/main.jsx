import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalLandingPage from './pages/globalLandingPage.jsx';
import Login from './pages/login.jsx';
import MyNews from './pages/myNews.jsx';
import Settings from './pages/settings.jsx';
import Error from './pages/error.jsx'; // Added import for error component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    ErrorElement: <Error />, // Altered: Added ErrorElement to handle route errors
    children: [
      {
        index: true,
        element: <GlobalLandingPage />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'myNews',
        element: <MyNews />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
