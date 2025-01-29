import './styles/colors.css'
import './styles/global.css'

import './i18n.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App/App.tsx'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from '../widgets/Loading/Loading.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
