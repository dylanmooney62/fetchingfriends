import React from 'react';

export const Container = ({ children, as, className = '', ...props }) => {
  const Component = as || 'div';

  return (
    <Component
      className={['container mx-auto mt-12 px-4 mb-12', className]
        .join(' ')
        .trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
