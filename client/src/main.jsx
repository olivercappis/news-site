import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalLandingPage from './pages/globalLandingPage.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';  // Import the Signup component
import MyNews from './pages/myNews.jsx';
import Settings from './pages/settings.jsx';
import Error from './pages/error.jsx';  // Import the Error component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,  // Add ErrorElement to handle route errors
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
        path: 'signup', // Add the Signup route here
        element: <Signup />  // Point to the Signup component
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
