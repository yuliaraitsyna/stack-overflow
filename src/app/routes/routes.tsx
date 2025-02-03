import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { UserPage } from "../../pages/UserPage/UserPage";
import { PostSnippetPage } from "../../pages/PostSnippetPage/PostSnippetPage";

type Layout = 'fullscreen' | 'default';

interface RouteProps {
    path: string,
    element: JSX.Element;
    isPrivate: boolean,
    layout: Layout
}

export const routes: RouteProps[] = [
    {
        path: '/',
        element: <HomePage />,
        isPrivate: false,
        layout: 'default'
    },
    {
        path: '/login',
        element: <LoginPage />,
        isPrivate: false,
        layout: 'fullscreen'
    },
    {
        path: '/register',
        element: <RegisterPage />,
        isPrivate: false,
        layout: 'fullscreen'
    },
    {
        path: '/account',
        element: <UserPage />,
        isPrivate: true,
        layout: 'default'
    },
    {
        path: 'post_snippet',
        element: <PostSnippetPage />,
        isPrivate: true,
        layout: 'default'
    }
]