import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { Field, Form, Formik } from 'formik';
import { ImageUpload } from '../components/ImageUpload';
import { InputGroup } from '../components/InputGroup';
import { Alert } from '../components/Alert';

const SubmissionSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "Your pet's name can not be longer than 50 characters")
    .required('Pet name is required'),
  description: Yup.string().max(
    500,
    'Your description can not be longer than 500 characters'
  ),
});

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    { title, description, image },
    { setStatus, setErrors }
  ) => {
    try {
      const accepted = ['image/jpeg', 'image/png'];

      if (!accepted.includes(image?.type)) {
        return setErrors({ image: 'Please add an image of your dog' });
      }

      const data = new FormData();
      data.append('image', image);
      data.append('submission', JSON.stringify({ title, description }));

      await axios.post('/api/v1/submissions', data);

      navigate('/');
    } catch (error) {
      setStatus('Could not upload image. please try again later');
    }
  };

  return (
    <Formik
      initialValues={{ title: '', description: '', image: {} }}
      onSubmit={handleSubmit}
      validationSchema={SubmissionSchema}
    >
      {({ isSubmitting, setFieldValue, errors, status }) => (
        <>
          {status && <Alert text={status} />}
          <Form className="flex flex-row justify-between w-full max-w-5xl mx-auto space-x-12">
            <ImageUpload
              onImageDrop={(image) => setFieldValue('image', image)}
              error={errors.image}
            />
            <div className="flex-1">
              <Field
                id="title"
                name="title"
                component={InputGroup}
                label="Your Dogs Name"
                placeholder="Your email"
              />
              <Field
                id="description"
                name="description"
                label="Description"
                placeholder="Your email"
              >
                {({ meta, field }) => (
                  <div className="form-control mb-6">
                    <label className="label" htmlFor="description">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      {...field}
                      className={`textarea h-56 textarea-bordered ${
                        meta.touch && meta.error && 'textarea-error'
                      }`}
                      placeholder="Tell us about your dog in 100 words or less"
                    ></textarea>
                    {meta.touched && meta.error && (
                      <label className="label" htmlFor="description">
                        <span className="label-text-alt">{meta.error}</span>
                      </label>
                    )}
                  </div>
                )}
              </Field>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Submit;
