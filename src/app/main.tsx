import './styles/colors.css'

import './styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes/routes'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Routes>
          {routes.map(({path, element}) => <Route path={path} element={element} />)}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
