import './styles/colors.css'
import './styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
       </AuthProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
