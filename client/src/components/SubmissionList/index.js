import React from 'react';
import { SubmissionCard } from '../SubmissionCard';

export const SubmissionList = ({ submissions }) => {
  return (
    <ul className="space-y-6 lg:space-y-0 md:gap-4 lg:grid lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-6">
      {submissions.map(({ id, title, description, imgUrl, voteCount }) => (
        <SubmissionCard
          key={id}
          id={id}
          title={title}
          body={description}
          imgUrl={imgUrl}
          voteCount={voteCount}
        />
      ))}
    </ul>
  );
};
