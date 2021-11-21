import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="navbar mb-2 shadow-lg  bg-primary ">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-1 flex">
          <Link to="/">
            <span className="text-lg font-bold text-white">
              FetchingFriends
            </span>
          </Link>
        </div>

        <div className="flex">
          <Link className="btn-white mr-3" to="/">
            View Entries
          </Link>
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
  );
};
