import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";

export const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
]