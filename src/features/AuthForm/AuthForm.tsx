import styles from './AuthForm.module.css';
import { Button, TextField, Typography } from '@mui/material';
import { useAuth } from '../../app/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { AuthFormProps, FormInputs } from './AuthForm.types';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const { login, register: registerUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const formText = type === 'login' ? 'Login' : 'Register';
  const buttonText = type === 'login' ? "Register" : "Login";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const { username, password, confirmPassword } = data;

    if (type === 'login') {
        login(username, password).catch((error) => setErrorMessage(error.message));
      } else {

        try {
          if (password !== confirmPassword) {
            throw new Error("Passwords don't match");
          }
        }
        catch(error) {
          if( error instanceof Error) {
            setErrorMessage(error.message);
          }
          else setErrorMessage("Something went wrong");
        }
        registerUser(username, password).catch((error) => setErrorMessage(error.message));
    }
  };

  const handleFormTypeChange = () => {
    if(type === 'login') {
        navigate('/register');
    }
    else {
        navigate('/login');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom>{formText}</Typography>
      <TextField
        {...register('username', { required: 'Username is required' })}
        label="username"
        type="text"
        fullWidth
        error={!!errors.username}
        helperText={errors.username?.message}
        required
      />
      <TextField
        {...register('password', {
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
          {...register('confirmPassword', {
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
