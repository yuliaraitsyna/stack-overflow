import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { setUser } from '../redux/slice/authSlice';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/auth', {
          method: 'GET',
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
          if(!user) {
            dispatch(setUser(await response.json()));
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking login status', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  return { isAuthenticated, loading };
};

export { useAuth };
