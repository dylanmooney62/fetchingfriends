import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string()
    .max(50, 'Username can not be more than 50 characters')
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(120, 'Password can not be more than 120 characters long'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  consent: Yup.bool().isTrue('You must agree to the terms and conditions'),
});
