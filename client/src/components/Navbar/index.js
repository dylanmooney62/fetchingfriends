import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaDog } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { MobileNav } from './MobileNav';
import { AuthPanel } from './AuthPanel';

const NAV_LINKS = [
  { text: 'Home', to: '/' },
  { text: 'Entries', to: '/entries' },
  { text: 'Judges', to: '/judges' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile nav if location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav>
      <div className="navbar shadow-lg bg-primary">
        <div className="container mx-auto px-4 flex items-center">
          <div className="hidden lg:flex flex-1 items-center">
            <Link to="/" className="lg:flex">
              <FaDog
                size={24}
                title="FetchingFriends dog logo"
                className="text-white fill-current mr-2"
              />
              <span className="text-lg font-bold text-white">
                Fetching Friends
              </span>{' '}
            </Link>
            <span className="hidden lg:block text-base-100 font-bold ml-2 mt-1">
              |
            </span>
            <div className="items-stretch hidden lg:flex ml-2">
              {NAV_LINKS.map(({ text, to }, idx) => (
                <Link
                  key={idx}
                  className="btn btn-ghost btn-primary btn-sm rounded-btn text-base-100"
                  to={to}
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-stretch lg:hidden">
            <button onClick={() => setIsOpen((o) => !o)}>
              <BiMenu
                className="text-base-100 fill-current hover:text-base-300 transition-colors"
                size={34}
              />
            </button>
          </div>

          <div className="flex">
            <Link className="btn-white mr-3" to="/submit">
              Submit Entry
            </Link>
            <AuthPanel />
          </div>
        </div>
      </div>
      {isOpen && <MobileNav links={NAV_LINKS} />}
    </nav>
  );
};
