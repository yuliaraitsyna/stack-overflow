import styles from './AuthButton.module.css';

import { useNavigate } from "react-router"
import { useAuth } from '../../app/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout as storeLogout } from '../../app/redux/slice/authSlice';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from '../../app/redux/api/authApi';

const AuthButton = () => {
    const {t} = useTranslation();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated, loading} = useAuth();

    const buttonText = isAuthenticated ? t('signOut') : t('signIn');

    const handleClick = () => {
        if(isAuthenticated) {
            dispatch(storeLogout());
            logout({});
            navigate('/');
        }
        else {
            navigate('/login')
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            {loading ? t('signIn') : buttonText}
        </button>
    )
}

export { AuthButton }
