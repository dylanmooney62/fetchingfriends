import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { InputGroup } from '../InputGroup';
import { LoginSchema } from './schema';

export const LoginForm = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    const { setSubmitting, setErrors } = actions;

    try {
      await auth.login({ email, password });
      return navigate(from, { replace: true });
    } catch (error) {
      setErrors({ email: error.response.data.error });
      setSubmitting(false);
    }
  };

  return (
    <div className="text-center flex-1">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting, setErrors }) => (
          <Form>
            <h2 className="font-bold text-xl mb-4">
              Login to your existing account
            </h2>
            <Field
              id="login-email"
              type="email"
              name="email"
              component={InputGroup}
              label="Email"
              placeholder="Your email"
            />
            <Field
              id="login-password"
              type="password"
              name="password"
              component={InputGroup}
              label="Password"
              placeholder="Your password"
            />
            <button
              className="btn btn-primary btn-block mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
