import React from 'react';

export const InputGroup = ({ id, label, field, touched, error, ...props }) => {
  return (
    <div className="form-control mb-3">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        className={`input input-bordered  ${
          touched && error ? 'input-error' : ''
        }`}
        {...props}
        {...field}
      />
      {touched && error && (
        <label className="label" htmlFor={id}>
          <span className="label-text-alt">{error}</span>
        </label>
      )}
    </div>
  );
};
