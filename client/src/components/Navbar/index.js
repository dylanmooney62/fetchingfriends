import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaDog } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';

export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
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
                FetchingFriends
              </span>{' '}
            </Link>
            <span className="hidden lg:block text-base-100 font-bold ml-2 mt-1">
              |
            </span>
            <div
              class="items-stretch hidden lg:flex"
              style={{ marginTop: '-1px' }}
            >
              <Link
                className="btn btn-ghost btn-primary btn-sm rounded-btn text-base-100"
                to="/"
              >
                Home
              </Link>
              <Link
                className="btn btn-ghost btn-primary btn-sm rounded-btn text-base-100"
                to="/"
              >
                Entries
              </Link>
              <Link
                className="btn btn-ghost btn-primary btn-sm rounded-btn text-base-100"
                to="/"
              >
                Judges
              </Link>
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

            {!auth.user ? (
              <Link className="btn-white mr-3" to="/login">
                Login | Sign up
              </Link>
            ) : (
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    className="flex items-center justify-between space-x-2 text-white font-bold hover:bg-primary-focus cursor-pointer px-2 rounded-md transition"
                    tabIndex="0"
                  >
                    <div className="avatar">
                      <div className="rounded-full w-10 h-10 m-1">
                        <img
                          src="https://picsum.photos/id/237/100"
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <p className="pr-1">{auth.user.username}</p>
                  </div>
                  <ul
                    tabIndex="0"
                    className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button
                        type="button"
                        className="py-3 px-3 hover:bg-base-300 rounded-lg text-left transition"
                        onClick={() => {
                          auth.logout(() => navigate('/'));
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-base-content">
          <div className="container mx-auto px-4">
            <div class="flex flex-col justify-items-start">
              <Link
                className="btn btn-ghost text-base-100 justify-start "
                to="/"
              >
                Home
              </Link>
              <Link
                className="btn btn-ghost  text-base-100 justify-start "
                to="/"
              >
                Entries
              </Link>
              <Link
                className="btn btn-ghost text-base-100 justify-start "
                to="/"
              >
                Judges
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
