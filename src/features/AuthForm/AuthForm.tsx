import styles from './AuthForm.module.css'

import { Button, TextField } from '@mui/material'
import  AuthFormProps from './AuthForm.types'
import { useAuth } from '../../app/hooks/useAuth';
import { useRef } from 'react';

const AuthForm: React.FC<AuthFormProps> = ({type}) => {
    const formText = type === 'login' ? "Login" : "Register";
    const usernameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const confirmPasswordInput = useRef<HTMLInputElement>(null);

    const {login, register} = useAuth();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const username = usernameInput.current?.value || '';
        const password = passwordInput.current?.value || '';

        if (type === 'login') {
            login(username, password);
        } else {
            const confirmPassword = confirmPasswordInput.current?.value || '';
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            register(username, password);
        }
    };

    return (
        <form className={styles.form} method='POST' onSubmit={handleFormSubmit}>
            <h1>{formText}</h1>
            <TextField ref={usernameInput} label="username"></TextField>
            <TextField ref={passwordInput} label="password"></TextField>
            { type === 'register' && <TextField ref={confirmPasswordInput} label="confirm password"></TextField> }
            <Button type='submit' variant='contained'>{formText}</Button>
        </form>
    )
}

export { AuthForm }
