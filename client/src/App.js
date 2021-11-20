import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const { data } = await axios.get('/api/v1/submissions');

        setSubmissions(data?.submissions || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubmissions();
  }, []);

  if (!submissions) {
    return <div>Loading...</div>;
  }

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      <button className="btn btn-primary">Hello</button>

      {submissions.map(({ _id, title, description, imgUrl }) => (
        <li key={_id}>
          <div>
            <img src={imgUrl} alt={description} style={{ width: 300 }} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default App;
