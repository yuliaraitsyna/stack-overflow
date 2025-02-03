import { useTranslation } from 'react-i18next';
import styles from './ChangeUsernameForm.module.css';

import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from 'react';
import { useChangeUsernameMutation } from '../../app/redux/api/authApi/authApi';
import { InfoModal } from '../InfoModal/InfoModal';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../app/redux/slices/authSlice/authSlice';

const ChangeUsernameForm = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [changeUsername] = useChangeUsernameMutation();
    const [successMessage, setSuccessMessage] = useState<string>('');

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            if(!username || !password) {
                throw new Error('Please fill in all fields');
            }

            await changeUsername({username, password})
            .unwrap()
            .catch(error => {throw new Error(error.message)})
            .then(() => {
                setSuccessMessage('Username has been changed successfully');
                dispatch(updateUsername(username));
            })
        }
        catch(error) {
            if(error instanceof Error) {
                setSuccessMessage(error.message);
            }
            else {
                setSuccessMessage('Something went wrong');
            }
        }
    }

    return (
        <>
            <Box className={styles.container}>
                <Typography variant='body2'>{t('changeUsername')}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField inputRef={usernameRef} label={t('newUsername')} required />
                    <TextField inputRef={passwordRef} label={t('password')} type='password' required />
                    <Button color='success' variant='contained' type='submit'>{t('save')}</Button>
                </form>
            </Box>
            <InfoModal open={!!successMessage} type='success' message={successMessage} />
        </>
    )
}

export { ChangeUsernameForm };