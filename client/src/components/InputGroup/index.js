import React from 'react';

export const InputGroup = ({
  id,
  label,
  error,
  field,
  form: { touched, errors },
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];

  return (
    <div className="form-control mb-3">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        className={`input input-bordered ${isError && 'input-error'}`}
        id={id}
        {...props}
        {...field}
      />
      {isError && (
        <label className="label" htmlFor={id}>
          <span className="label-text-alt">{errors[field.name]}</span>
        </label>
      )}
    </div>
  );
};
