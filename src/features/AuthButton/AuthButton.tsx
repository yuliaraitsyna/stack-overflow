import styles from './AuthButton.module.css';

import { Button } from "@mui/material";
import { useNavigate } from "react-router"
import { useIsLoggedIn } from '../../app/hooks/useIsLoggedIn';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/redux/slice/authSlice';

const AuthButton = () => {
    const navigate = useNavigate();
    const isLogged = useIsLoggedIn();
    const dispatch = useDispatch();

    const buttonText = isLogged ? 'Logout' : 'Login';

    const handleClick = () => {
        if(isLogged) {
            dispatch(logout());
        }
        else {
            navigate('login')
        }
    }

    return (
        <Button className={styles.button} variant="contained" onClick={handleClick}>
            {buttonText}
        </Button>
    )
}

export { AuthButton }