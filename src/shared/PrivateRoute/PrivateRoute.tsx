import { useNavigate } from "react-router";
import { useAuth } from "../../app/hooks/useAuth";
import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material";

interface PrivateRouteProps {
    Component: React.ReactNode;
    redirect: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, redirect }) => {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!loading && !isAuthenticated) {
            navigate(redirect);
        } 
    }, [isAuthenticated, loading, navigate, redirect])

    return isAuthenticated ? Component : <CircularProgress/>;
};

export { PrivateRoute };
