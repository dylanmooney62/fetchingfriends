import React from 'react';

export const SubmissionCard = ({
  id,
  title,
  body,
  imgUrl,
  voteCount,
  onVote,
  hasVoted,
}) => (
  <li>
    <div
      className="rounded-xl overflow-hidden p-4 bg-primary "
      style={{ backgroundColor: '#e5f6eb' }}
    >
      <figure className="mb-4">
        <img
          src={imgUrl}
          alt={title}
          className="h-80 object-cover object-center w-full rounded-xl "
        />
      </figure>
      <div className="text-center">
        <h2 className="text-2xl font-bold capitalize mb-2">{title}</h2>
        <p className="">{body}</p>
        <p>I have: {voteCount} votes</p>
        <p>
          {hasVoted ? 'You have voted for me' : 'You have not voted for me'}
        </p>
        <button className="btn btn-primary" onClick={() => onVote(id)}>
          Vote!
        </button>
      </div>
    </div>
  </li>
);
