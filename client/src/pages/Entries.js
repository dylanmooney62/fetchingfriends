import React from 'react';
import { SubmissionList } from '../components/SubmissionList';
import { Container } from '../components/Container';
import { useSubmissions } from '../hooks/useSubmissions';

const Home = () => {
  const { submissions, loading } = useSubmissions();

  return (
    <Container>
      <div className="flex items-center mb-10">
        <label className="font-bold text-lg mr-3" htmlFor="filter">
          Filter By:
        </label>
        <select className="select select-bordered w-full max-w-xs" id="filter">
          <option value="">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
      {loading ? <p>Loading</p> : <SubmissionList submissions={submissions} />}
    </Container>
  );
};

export default Home;
