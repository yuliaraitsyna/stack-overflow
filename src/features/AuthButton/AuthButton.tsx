import styles from './AuthButton.module.css';

import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { logout as storeLogout } from '../../app/redux/slices/authSlice/authSlice';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from '../../app/redux/api/authApi/authApi';
import { useEffect, useState } from 'react';
import { userSelector } from '../../app/redux/selectors/authSelectors';
import { InfoModal } from '../InfoModal/InfoModal';

const AuthButton = () => {
    const {t} = useTranslation();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(userSelector);
    const [buttonText, setButtonText] = useState(t('signIn'));
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        setButtonText(user ? t('signOut') : t('signIn'));
    }, [t, user]);

    const handleClick = async () => {
        try {
            if(user) {
                await logout()
                .then(() => {
                    dispatch(storeLogout());
                    navigate('/');
                })
                .catch(error => { throw new Error(error.message)})
            }
            else {
                navigate('/login');
            }
        }
        catch(error) {
            if(error instanceof Error) {
                setErrorMessage(error.message);
            }
            else setErrorMessage("Something went wrong");
        }
    }

    return (
        <>
            <button className={styles.button} onClick={handleClick}>
                {buttonText}
            </button>
            <InfoModal type='error' message={errorMessage} onClose={() => setErrorMessage('')} open={!!errorMessage} />
        </>
    )
}

export { AuthButton }
