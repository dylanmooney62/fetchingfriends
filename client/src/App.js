import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await axios.get('submissions');

        setSubmissions(data?.submissions || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubmissions();
  }, []);

  return <div>{JSON.stringify(submissions, 4)}</div>;
};

export default App;
