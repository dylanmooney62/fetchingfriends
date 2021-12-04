import { useContext } from 'react';
import { SubmissionContext } from '../context/SubmissionContext';

export const useSubmissions = () => {
  const { submissions, loading, vote, votes, sort } =
    useContext(SubmissionContext);

  return {
    submissions,
    loading,
    vote,
    votes,
    sort,
  };
};
