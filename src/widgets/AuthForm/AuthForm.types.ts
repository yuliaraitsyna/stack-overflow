export type FormType = 'login' | 'register';

export interface AuthFormProps {
    type: FormType;
}

export interface FormInputs {
    username: string;
    password: string;
    confirmPassword?: string;
}
