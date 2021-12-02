import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CardItem } from '../components/CardItem';
import { CardList } from '../components/CardList';
import { Container } from '../components/Container';

const Home = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data } = await axios.get('/api/v1/submissions');

        setSubmissions(data?.submissions || []);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const submissionList =
    submissions.length === 0 ? (
      <p>No submissions found</p>
    ) : (
      <CardList>
        {submissions.map(({ id, title, description, imgUrl }) => (
          <CardItem key={id} title={title} body={description} imgUrl={imgUrl} />
        ))}
      </CardList>
    );

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
      {loading ? <p>Loading...</p> : submissionList}
    </Container>
  );
};

export default Home;
