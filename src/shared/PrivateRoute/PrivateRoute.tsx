import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { PrivateRouteProps } from "./PrivateRoute.types";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, redirect, isAuthenticated }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navigate(redirect);
        } 
    }, [isAuthenticated, navigate, redirect])

    return isAuthenticated ? Component : null;
};

export { PrivateRoute };
