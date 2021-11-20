import React from 'react';

export const Navbar = () => (
  <div className="navbar mb-2 shadow-lg text-neutral-content bg-primary">
    <div className="container mx-auto">
      <div className="flex-1 flex">
        <span className="text-lg font-bold">FetchingFriends</span>
      </div>

      <div className="flex-one">
        <a className="btn-white mr-3" href="/">
          View Entries
        </a>
        <a className="btn-white mr-3" href="/submissions/new">
          Submit Entry
        </a>
        <a className="btn-white mr-3" href="/login">
          Login
        </a>
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
