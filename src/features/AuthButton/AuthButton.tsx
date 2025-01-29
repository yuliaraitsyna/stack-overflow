import styles from './AuthButton.module.css';

import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { logout as storeLogout } from '../../app/redux/slices/authSlice/authSlice';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from '../../app/redux/api/authApi/authApi';
import { useEffect, useState } from 'react';
import { RootState } from '../../app/redux/store/store';

const AuthButton = () => {
    const {t} = useTranslation();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const [buttonText, setButtonText] = useState(t('signIn'));

    useEffect(() => {
        setButtonText(user ? t('signOut') : t('signIn'));
    }, [t, user]);

    const handleClick = () => {
        if(user) {
            logout();
            dispatch(storeLogout());
            navigate('/');
        }
        else {
            navigate('/login');
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            {buttonText}
        </button>
    )
}

export { AuthButton }
