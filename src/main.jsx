import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './store.js';
import { Provider } from 'react-redux';
import Error from './components/Error.jsx';
import Loading from './components/Loading.jsx';
const DescriptionPage = React.lazy(() => import('./pages/DescriptionPage.jsx'));
const ApiPage = React.lazy(() => import('./pages/ApiPage.jsx'));
const CalculatorPage = React.lazy(() => import('./pages/CalculatorPage.jsx'));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <DescriptionPage />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'api',
        element: (
          <React.Suspense fallback={<Loading />}>
            <ApiPage />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'calculator',
        element: (
          <React.Suspense fallback={<Loading />}>
            <CalculatorPage />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
