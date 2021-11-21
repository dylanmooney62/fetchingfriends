import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className="navbar mb-2 shadow-lg text-neutral-content bg-primary ">
    <div className="container mx-auto px-4">
      <div className="flex-1 flex">
        <Link to="/">
          <span className="text-lg font-bold">FetchingFriends</span>
        </Link>
      </div>

      <div className="flex-one">
        <Link className="btn-white mr-3" to="/">
          View Entries
        </Link>
        <Link className="btn-white mr-3" to="/submit">
          Submit Entry
        </Link>
        <Link className="btn-white mr-3" to="/login">
          Login
        </Link>
      </div>

      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1">
            <img src="https://picsum.photos/id/237/100" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
