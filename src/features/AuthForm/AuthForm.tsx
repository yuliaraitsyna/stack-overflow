import styles from './AuthForm.module.css';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useLoginMutation, useRegisterMutation } from '../../app/redux/api/authApi';
import AuthFormProps from './AuthForm.types';
import { useState } from 'react';

interface FormInputs {
  username: string;
  password: string;
  confirmPassword?: string;
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const [login] = useLoginMutation();
  const [registerUser] = useRegisterMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const formText = type === 'login' ? 'Login' : 'Register';
  const buttonText = type === 'login' ? 'Go to Register' : 'Go to Login';

  const {
    register: formRegister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const { username, password, confirmPassword } = data;

    if (type === 'login') {
        await login({ username, password }).catch(error => setErrorMessage(error.message));
        navigate('/');
    } else {
        if (password !== confirmPassword) {
          throw new Error("Passwords don't match");
        }
        await registerUser({ username, password }).catch(error => setErrorMessage(error.message));
        navigate('/');
      }
  };

  const handleFormTypeChange = () => {
    navigate(type === 'login' ? '/register' : '/login');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom>{formText}</Typography>
      <TextField
        {...formRegister('username', { required: 'Username is required' })}
        label="username"
        type="text"
        fullWidth
        error={!!errors.username}
        helperText={errors.username?.message}
        required
      />
      <TextField
        {...formRegister('password', {
          required: 'Password is required',
          minLength: { value: 5, message: 'Password must be at least 5 characters' },
        })}
        label="Password"
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
          label="Confirm Password"
          type="password"
          fullWidth
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          required
        />
      )}
      <Typography color='error'>{errorMessage}</Typography>
      <Button type="submit" variant="contained" color="primary">{formText}</Button>
      <Button className={styles.navigateBtn} variant='text' onClick={handleFormTypeChange}>{buttonText}</Button>
    </form>
  );
};

export { AuthForm };
