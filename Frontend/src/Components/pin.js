import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuizComponent = () => {

  const {type} = useParams();
  
  useEffect(() => {
    fetchData();
  })

  const [details, setDetails] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:2023/showques/${type}`);
    setDetails(response.data);
  }

  return(
    <>
     <p>{details.question}</p>
     <button>{details.option}</button>
    </>
  );
  
};

export default QuizComponent;
