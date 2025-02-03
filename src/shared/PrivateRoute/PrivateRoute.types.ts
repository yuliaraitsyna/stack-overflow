export interface PrivateRouteProps {
    Component: React.ReactNode;
    redirect: string;
    isAuthenticated: boolean;
}