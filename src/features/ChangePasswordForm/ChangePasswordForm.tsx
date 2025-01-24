import styles from './ChangePasswordForm.module.css';

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useChangePasswordMutation } from '../../app/redux/api/authApi';

interface ChangePasswordFormInputs {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}

const ChangePasswordForm = () => {
    const {t} = useTranslation();
    const [errorMessage, setErrorMessage] = useState('');
    const [changePassword] = useChangePasswordMutation();

    const {
        register: formRegister,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm<ChangePasswordFormInputs>();

    const onSubmit = async (data: ChangePasswordFormInputs) => {
        const {oldPassword, newPassword} = data;

        try {
            const response = await changePassword({oldPassword, newPassword})
            .unwrap()
            .catch(error => setErrorMessage(error.message));

            if(response.ok) {
                reset();
            }
            //modal window
        }
        catch(error) {
            console.error(error);
        }
    }

    return (
        <Box className={styles.container}>
            <Typography variant='body2'>Change your password: </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    {...formRegister('oldPassword', {required: 'Old password is required'})}
                    label={t('oldPassword')}
                    type='password'
                    error={!!errors.oldPassword}
                    helperText={errors.oldPassword?.message}
                />
                <TextField
                    {...formRegister('newPassword', 
                        {
                            required: 'New password is required',
                            minLength: {value: 6, message: 'Password be at least 6 characters'},
                        }
                    )}
                    label={t('newPassword')}
                    type='password'
                    error={!!errors.newPassword}
                    helperText={errors.newPassword?.message}
                />
                <TextField
                    {...formRegister('confirmPassword', 
                        {
                            required: 'Confirm password is required',
                            validate: (value) => value === watch('newPassword') || "Password don't match",
                        }
                    )}
                    label={t('confirmPassword')}
                    type='password'
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
                <Typography color='error'>{errorMessage}</Typography>
                <Button color='success' variant='contained' type='submit'>Change password</Button>
            </form>
        </Box>
    )
}

export { ChangePasswordForm };