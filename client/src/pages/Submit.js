import React from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { Field, Form, Formik } from 'formik';
import { InputGroup } from '../components/InputGroup';

import * as Yup from 'yup';

const SubmissionSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "Your pet's name can not be longer than 50 characters")
    .required('Pet name is required'),
  description: Yup.string().max(
    500,
    'Your description can not be longer than 500 characters'
  ),
  img: Yup.object(),
});

const Submit = () => {
  const handleSubmit = (values, actions) => {};

  return (
    <Formik
      initialValues={{ title: '', description: '', img: {} }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={SubmissionSchema}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="flex flex-row justify-between w-full max-w-5xl mx-auto space-x-12">
          <ImageUpload onImageDrop={(img) => setFieldValue('img', img)} />
          <div className="flex-1">
            <Field
              id="title"
              name="title"
              component={InputGroup}
              label="Your Dogs Name"
              placeholder="Your email"
            />
            {/* Will be refactored in future */}
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
      )}
    </Formik>
  );
};

export default Submit;
