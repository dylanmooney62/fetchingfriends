import React from 'react';

export const Container = ({ children, as, ...props }) => {
  const Component = as || 'div';

  return (
    <Component className="container mx-auto mt-12 px-4 mb-12" {...props}>
      {children}
    </Component>
  );
};
