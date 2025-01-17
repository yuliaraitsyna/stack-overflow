import styles from './AuthButton.module.css';

import { useNavigate } from "react-router"
import { useIsLoggedIn } from '../../app/hooks/useIsLoggedIn';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/redux/slice/authSlice';
import { useTranslation } from 'react-i18next';

const AuthButton = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const isLogged = useIsLoggedIn();
    const dispatch = useDispatch();

    const buttonText = isLogged ? t('signOut') : t('signIn');

    const handleClick = () => {
        if(isLogged) {
            dispatch(logout());
        }
        else {
            navigate('login')
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            {buttonText}
        </button>
    )
}

export { AuthButton }