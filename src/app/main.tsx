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
import { PrivateRoute } from '../shared/PrivateRoute/PrivateRoute.tsx'
import { FullScreenLayout } from './App/FullScreenLayout/FullScreenLayout.tsx'
import { DefaultLayout } from './App/DefaultLayout/DefaultLayout.tsx'
import { HomePage } from '../pages/HomePage/HomePage.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              {routes
                .filter(({ layout }) => layout === "default")
                .map(({ path, element, isPrivate }) => (
                  <Route
                    key={uuidv4()}
                    path={path}
                    element={isPrivate ? <PrivateRoute Component={element} redirect="/login" /> : element}
                  />
                ))}
            </Route>

            {routes
              .filter(({ layout }) => layout === "fullscreen")
              .map(({ path, element, isPrivate }) => (
                <Route
                  key={uuidv4()}
                  path={path}
                  element={
                    isPrivate ? (
                      <PrivateRoute Component={element} redirect="/login" />
                    ) : (
                      <FullScreenLayout>{element}</FullScreenLayout>
                    )
                  }
                />
              ))}
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
