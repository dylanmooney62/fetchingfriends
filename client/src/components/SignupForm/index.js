import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { InputGroup } from '../InputGroup';
import { SignupSchema } from './schema';
import { Link } from 'react-router-dom';

export const SignupForm = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (values, actions) => {
    const { email, username, password } = values;
    const { setSubmitting, setStatus, setErrors } = actions;

    try {
      await auth.register({ email, username, password });
      return navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.response.data.error;

      if (errorMessage.includes('Duplicate')) {
        const key = errorMessage.split(':')[1].trim();
        setErrors({
          [key]: `${key} is already in use. please choose another ${key}`,
        });
      } else {
        setStatus(error.response.data.error);
      }

      setSubmitting(false);
    }
  };

  return (
    <div className="text-center flex-1">
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          consent: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className="font-bold text-xl mb-4">Sign up for an account</h2>
            <Field
              id="signup-email"
              type="email"
              name="email"
              component={InputGroup}
              label="Email"
              placeholder="Your email"
            />
            <Field
              id="signup-username"
              name="username"
              component={InputGroup}
              label="Username"
              placeholder="Choose a username"
            />
            <Field
              id="signup-password"
              type="password"
              name="password"
              component={InputGroup}
              label="Password"
              placeholder="Your password"
            />
            <Field
              id="signup-cpassword"
              type="password"
              name="confirmPassword"
              component={InputGroup}
              label="Confirm Password"
              placeholder="Retype your password"
            />

            <Field id="consent" name="consent">
              {({ meta, field }) => (
                <div className="form-control">
                  <label className="cursor-pointer label" htmlFor="consent">
                    <span className="label-text">
                      I agree to{' '}
                      <Link to="/terms" className="link" target="_blank">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link
                        to="/privacypolicy"
                        className="link"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                    <input
                      {...field}
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                  </label>
                  {meta.touched && meta.error && (
                    <label className="label" htmlFor="consent">
                      <span className="label-text-alt text-error">
                        {meta.error}
                      </span>
                    </label>
                  )}
                </div>
              )}
            </Field>

            <button
              className="btn btn-primary btn-block mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
