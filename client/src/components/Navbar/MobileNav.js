import React from 'react';
import { Link } from 'react-router-dom';

export const MobileNav = ({ links }) => (
  <div className="bg-base-content">
    <div className="container mx-auto px-4">
      <div class="flex flex-col justify-items-start">
        {links.map(({ text, to }) => (
          <Link className="btn btn-ghost text-base-100 justify-start " to={to}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  </div>
);
