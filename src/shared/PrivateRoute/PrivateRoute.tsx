import { useNavigate } from "react-router";
import { FC, useEffect } from "react";
import { PrivateRouteProps } from "./PrivateRoute.types";

const PrivateRoute: FC<PrivateRouteProps> = ({ Component, redirect, isAuthenticated }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navigate(redirect);
        } 
    }, [isAuthenticated, navigate, redirect])

    return isAuthenticated ? Component : null;
};

export { PrivateRoute };
