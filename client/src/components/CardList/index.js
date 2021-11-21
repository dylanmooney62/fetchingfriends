import React from 'react';

export const CardList = ({ children }) => {
  return (
    <ul className="space-y-6 lg:space-y-0 md:gap-4 lg:grid lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-6">
      {children}
    </ul>
  );
};
