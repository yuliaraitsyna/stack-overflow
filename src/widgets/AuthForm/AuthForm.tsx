import styles from './AuthForm.module.css';

import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useLoginMutation, useRegisterMutation } from '../../app/redux/api/authApi';
import AuthFormProps from './AuthForm.types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../app/redux/slice/authSlice';
import { useTranslation } from 'react-i18next';
import { InfoModal } from '../../features/InfoModal/InfoModal';

interface FormInputs {
  username: string;
  password: string;
  confirmPassword?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const { t } = useTranslation();
  const [login] = useLoginMutation();
  const [registerUser] = useRegisterMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formText = type === 'login' ? t('login') : t('register');
  const buttonText = type === 'login' ? t('registerLink') : t('loginLink');

  const {
    register: formRegister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const { username, password } = data;

      if (type === 'login') {
        const userData = await login({ username, password })
          .unwrap()
          .catch(error => setErrorMessage(error.data.message));

        if (userData) {
          dispatch(setUser(userData.data));
          navigate('/');
        }

      } else {
        const userData = await registerUser({ username, password })
          .unwrap()
          .catch(error => setErrorMessage(error.data.message));

        if (userData) {
          const loginData = await login({ username, password }).unwrap().catch(error => setErrorMessage(error.message));

          if (loginData) {
            dispatch(setUser(loginData.user));
            navigate('/');
          }
        }
      }
  };

  const handleFormTypeChange = () => {
    navigate(type === 'login' ? '/register' : '/login');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>{formText}</h1>
      <TextField
        {...formRegister('username', { required: 'Username is required' })}
        label={t('username')}
        type="text"
        fullWidth
        error={!!errors.username}
        helperText={errors.username?.message}
        required
      />
      <TextField
        {...formRegister('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters' },
        })}
        label={t('password')}
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        required
      />
      {type === 'register' && (
        <TextField
          {...formRegister('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === watch('password') || "Passwords don't match",
          })}
          label={t('confirmPassword')}
          type="password"
          fullWidth
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          required
        />
      )}
      <InfoModal message={errorMessage} type="error" open={!!errorMessage} />
      <Button type="submit" variant="contained" color="primary">
        <span>{formText}</span>
      </Button>
      <Button className={styles.navigateBtn} variant='text' onClick={handleFormTypeChange}>
        <span>{buttonText}</span>
      </Button>
    </form>
  );
};

export { AuthForm };
