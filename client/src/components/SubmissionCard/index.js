import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const SubmissionCard = ({
  title,
  imgUrl,
  voteCount,
  hasVoted,
  onVote,
}) => (
  <li>
    <div
      className="rounded-md overflow-hidden p-4 shadow-sm bg-primary-focus"
      style={{ backgroundColor: '#e5f6eb' }}
    >
      <figure className="mb-4 relative">
        <div className="h-full w-full absolute inset-0 bg-neutral opacity-20 rounded-md z-0"></div>
        <div className="z-10 absolute left-2 top-2 flex items-center">
          <button onClick={onVote} className="mr-3" aria-label="vote">
            {hasVoted ? (
              <FaHeart
                size={36}
                className="text-base-100 fill-current"
                title="remove vote"
              />
            ) : (
              <FaRegHeart
                size={36}
                className="text-base-100 fill-current"
                title="add vote"
              />
            )}
          </button>
          <p className="text-lg text-base-100 font-bold">{voteCount}</p>
        </div>
        <img
          src={imgUrl}
          alt={title}
          className="h-80 object-cover object-center w-full rounded-md"
        />
      </figure>
      <div className="text-center">
        <h2 className="text-2xl font-bold capitalize text-neutral">{title}</h2>
      </div>
    </div>
  </li>
);
