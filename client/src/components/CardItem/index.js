import React from 'react';

export const CardItem = ({ title, body, imgUrl }) => (
  <li>
    <div
      className="rounded-xl overflow-hidden p-4 bg-primary "
      style={{ backgroundColor: '#e5f6eb' }}
    >
      <figure className="mb-4">
        <img
          src={imgUrl}
          alt={title}
          className="h-80 object-cover object-center w-full rounded-xl "
        />
      </figure>
      <div className="text-center">
        <h2 className="text-2xl font-bold capitalize mb-2">{title}</h2>
        <p className="">{body}</p>
      </div>
    </div>
  </li>
);
