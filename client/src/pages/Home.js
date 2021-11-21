import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CardItem } from '../components/CardItem';
import { CardList } from '../components/CardList';

const Home = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data } = await axios.get('/api/v1/submissions');

        setSubmissions(data?.submissions || []);

        setLoading(false);

        console.log(data?.submissions);
      } catch (error) {
        console.log(error);
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
    <div>
      <div className="flex items-center mb-10">
        <label className="font-bold text-lg mr-3" htmlFor="filter">
          Filter By:
        </label>
        <select class="select select-bordered w-full max-w-xs" id="filter">
          <option selected="selected" value="">
            Most Recent
          </option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
      {loading ? <p>Loading...</p> : submissionList}
    </div>
  );
};

export default Home;
