import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalLandingPage from './pages/globalLandingPage page.jsx'
import Login from './pages/login.jsx';
import MyNews from './pages/myNews.jsx';
import Settings from './pages/settings.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    ErrorElement: <Error />,
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
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
