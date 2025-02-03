import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { setUser } from "../redux/slices/authSlice/authSlice";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = useSelector((state: RootState) => state.auth.user);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;

        const checkLoginStatus = async () => {
            try {
                const response = await fetch("/api/auth", {
                    method: "GET",
                });

                if (response.status === 200 && isMounted) {
                    setIsAuthenticated(true);

                    if (!user && !isAuthenticated) {
                        const data = await response.json();
                        dispatch(setUser(data.data));
                    }
                } else if (isMounted) {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Error checking login status", error);
                if (isMounted) {
                    setIsAuthenticated(false);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        checkLoginStatus();

        return () => {
            isMounted = false;
        };
    }, [dispatch, isAuthenticated, user]);

    return { isAuthenticated, loading };
};

export { useAuth };
