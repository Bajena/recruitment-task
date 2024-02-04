import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApiPage from './pages/ApiPage';
import CalculatorPage from './pages/CalculatorPage.jsx';
import DescriptionPage from './pages/DescriptionPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DescriptionPage />,
      },
      {
        path: '/api',
        element: <ApiPage />,
      },
      {
        path: '/calculator',
        element: <CalculatorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
