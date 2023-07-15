import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './comp/CardList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://dzse5zr1rf.execute-api.us-east-1.amazonaws.com/dev/notes'
      );
      setNotes(response.data.Items);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    

    fetchData();
  }, []);

  return <CardList notes={notes} />;
};

export default App;
