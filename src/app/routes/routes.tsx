import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { UserPage } from "../../pages/UserPage/UserPage";
import { PostSnippetPage } from "../../pages/PostSnippetPage/PostSnippetPage";
import { MySnippetsPage } from "../../pages/MySnippetsPage/MySnippetsPage";
import { QuestionsPage } from "../../pages/QuestionsPage/QuestionsPage";
import { EditSnippetPage } from "../../pages/EditSnippetPage/EditSnippetPage";
import { UsersPage } from "../../pages/UsersPage/UsersPage";
import { SnippetPage } from "../../pages/SnippetPage/SnippetPage";
import { RouteProps } from "./routes.types";

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
    },
    {
        path: 'my_snippets',
        element: <MySnippetsPage />,
        isPrivate: true,
        layout: 'default'
    },
    {
        path: 'questions',
        element: <QuestionsPage />,
        isPrivate: true,
        layout: 'default'
    },
    {
        path: 'edit_snippet/:id',
        element: <EditSnippetPage />,
        isPrivate: true,
        layout: 'default'
    },
    {
        path: 'users',
        element: <UsersPage />,
        isPrivate: true,
        layout: 'default'
    },
    {
        path: 'user/:id',
        element: <UserPage />,
        isPrivate: true,
        layout: 'default'
    },
    {
        path: 'snippet/:id',
        element: <SnippetPage />,
        isPrivate: true,
        layout: 'default'
    }
]