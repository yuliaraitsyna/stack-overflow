import './styles/colors.css'
import './styles/global.css'

import './i18n.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { v4 as uuidv4 } from 'uuid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map(({path, element}) => <Route key={uuidv4()} path={path} element={element} />)}
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
