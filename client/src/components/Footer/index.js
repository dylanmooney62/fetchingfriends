import React from 'react';
import { Link } from 'react-router-dom';
import { FaDog } from 'react-icons/fa';

const FOOTER_LINKS = [
  { text: 'Home', to: '/' },
  { text: 'Submit Entry', to: '/submit' },
  { text: 'Login', to: '/login' },
  { text: 'Sign up', to: '/login' },
  { text: 'Privacy Policy', to: '/privacypolicy' },
];

export const Footer = () => {
  return (
    <footer className="bg-base-300 mt-auto">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <FaDog size={24} title="logo" className="mr-2" />
          <p className="font-bold mr-3 -mb-1">Fetching Friends</p>
          <small className="-mb-1">
            Copyright © {new Date().getFullYear()} - All right reserved
          </small>
        </div>
        <ul className="flex">
          {FOOTER_LINKS.map(({ text, to }) => (
            <li className="mr-4 last:mr-0">
              <Link
                to={to}
                className="hover:text-neutral-focus transition-colors"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
