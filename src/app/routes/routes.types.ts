type Layout = 'fullscreen' | 'default';

export interface RouteProps {
    path: string,
    element: JSX.Element;
    isPrivate: boolean,
    layout: Layout
}