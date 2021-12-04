import React from 'react';
import { SubmissionList } from '../components/SubmissionList';
import { Container } from '../components/Container';
import { useSubmissions } from '../hooks/useSubmissions';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: auto;
  margin-top: 12em;
`;

const Home = () => {
  const { submissions, loading, sort } = useSubmissions();

  return (
    <Container>
      <div className="flex items-center mb-10">
        <label className="font-bold text-lg mr-3" htmlFor="filter">
          Sort By:
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          id="filter"
          onChange={(e) => sort(e.target.value)}
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
      {loading ? (
        <ClipLoader
          color="#66CC8A"
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <SubmissionList submissions={submissions} />
      )}
    </Container>
  );
};

export default Home;
