import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const SORT_MAP = {
  POPULAR: (a, b) => b.voteCount - a.voteCount,
  RECENT: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
};

export const SubmissionContext = createContext({});

export const SubmissionProvider = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data } = await axios.get(`/api/v1/submissions`);

        setSubmissions(data?.submissions || []);

        setLoading(false);
      } catch (error) {
        setError('Something went wrong, please try again later');
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  useEffect(() => {
    if (!auth.user) return;

    const votes = auth?.user?.votes;

    if (!votes) return;

    // Flatten votes to array for simpler comparison
    setVotes(votes.map(({ submission }) => submission));
  }, [auth.user]);

  const vote = async (id) => {
    if (!auth.user) {
      return navigate('/login');
    }

    const {
      data: { message },
    } = await axios.post(`/api/v1/submissions/${id}/vote`);

    if (message === 'added') {
      setVotes((votes) => [...votes, id]);
      updateSubmissionVoteCount(id, 1);
    } else if (message === 'removed') {
      setVotes((votes) => votes.filter((sId) => sId !== id));
      updateSubmissionVoteCount(id, -1);
    }
  };

  const updateSubmissionVoteCount = (id, amount) => {
    setSubmissions((submissions) =>
      submissions.map((sub) =>
        sub.id !== id ? sub : { ...sub, voteCount: sub.voteCount + amount }
      )
    );
  };

  const sort = (field) => {
    // Simulate load so sort isn't jarring
    setLoading(true);

    setInterval(() => {
      setLoading(false);
    }, 350);

    setSubmissions((submissions) =>
      [...submissions].sort(SORT_MAP[field.toUpperCase()])
    );
  };

  return (
    <SubmissionContext.Provider
      value={{ submissions, loading, votes, vote, error, sort }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};
