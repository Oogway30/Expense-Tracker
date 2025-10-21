import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Transaction from './Other Pages/Transaction';
import Reports from './Other Pages/Reports';
import Profile from './Other Pages/Profile';
import ErrorPage from './Error/Error';
import Testing from './Other Pages/Testing';
import BudgetsComingSoon from './Other Pages/BudgetsComingSoon.tsx'

import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider
      router={createBrowserRouter([
        { path: "*", element: <ErrorPage /> },
        { path: "/", element: <App /> },
        { path: "/transaction", element: <Transaction /> },
        { path: "/profile", element: <Profile /> },
        { path: "/reports", element: <Reports /> },
        { path: "/budgets", element: <BudgetsComingSoon /> },
        { path: "/testing", element: <Testing /> },

      ])}
      />
      </Provider>
  </StrictMode>
)
