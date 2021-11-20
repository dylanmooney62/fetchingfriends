import React from 'react';

export const InputGroup = ({ onChange, label, value, ...props }) => {
  return (
    <div className="form-control mb-3">
      <label className="label" htmlFor={label}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        className="input input-bordered"
        id={label}
        {...props}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};
