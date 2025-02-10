import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme/theme'
import { DefaultLayout } from './DefaultLayout/DefaultLayout'
import { routes } from '../routes/routes'
import { PrivateRoute } from '../../shared/PrivateRoute/PrivateRoute'
import { FullScreenLayout } from './FullScreenLayout/FullScreenLayout'
import { useAuth } from '../hooks/useAuth/useAuth'
import { Loading } from '../../widgets/Loading/Loading'

const App = () => {
    const { isAuthenticated, loading } = useAuth();

    return (
        <>
            {
                loading
                    ?
                    <Loading />
                    :
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Routes>
                                <Route element={<DefaultLayout />}>
                                    {routes
                                        .filter(({ layout }) => layout === "default")
                                        .map(({ path, element, isPrivate }) => (
                                            <Route
                                                key={path}
                                                path={path}
                                                element={isPrivate ? <PrivateRoute Component={element} redirect="/login" isAuthenticated={isAuthenticated} /> : element}
                                            />
                                    ))}
                                </Route>
                                {routes
                                    .filter(({ layout }) => layout === "fullscreen")
                                    .map(({ path, element, isPrivate }) => (
                                        <Route
                                            key={path}
                                            path={path}
                                            element={
                                                isPrivate ? (
                                                    <PrivateRoute Component={element} redirect="/login" isAuthenticated={isAuthenticated} />
                                                ) : (
                                                    <FullScreenLayout>{element}</FullScreenLayout>
                                                )
                                            }
                                        />
                                    ))}
                            </Routes>
                        </BrowserRouter>
                    </ThemeProvider>
            }
        </>
    )
}

export { App };
