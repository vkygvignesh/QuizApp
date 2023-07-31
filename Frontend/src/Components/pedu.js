import React, { useState, useEffect,useCallback } from 'react';
import axios from 'axios';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shownQuestions, setShownQuestions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch quiz questions from the backend when the component mounts
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:2023/showques'); // Replace with your backend API endpoint
      const data = response.data;
      setQuestions(data);
      setLoading(false); // Assuming the data is an array of question objects
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  // Function to get the next random question from the available questions
  const getRandomQuestion =useCallback(() => {
    // If all questions have been shown, reset the shownQuestions array
    if (shownQuestions.length === questions.length) {
      setShownQuestions([]);
    }
  

    // Filter out the questions that have already been shown
    const availableQuestions = questions.filter(
      (question) => !shownQuestions.includes(question.id)
    );

    // Generate a random index to select a question from the available ones
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);

    // Get the randomly selected question
    const randomQuestion = availableQuestions[randomIndex];

    // Update the shownQuestions array to include the current question ID
    setShownQuestions((prevShownQuestions) => [...prevShownQuestions, randomQuestion.id]);

    return randomQuestion;
  });

  useEffect(() => {
    // When questions are fetched, show the first question
    if (questions.length > 0) {
      const question = getRandomQuestion();
      setCurrentQuestionIndex(questions.indexOf(question));
      setSelectedOption(null);
    }
  }, [shownQuestions,questions,getRandomQuestion]);

  // Function to handle selecting an option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      const nextQuestion = getRandomQuestion();
      setCurrentQuestionIndex(questions.indexOf(nextQuestion));
      setSelectedOption(null);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching questions
  }
  if (!questions || questions.length === 0) {
    return <div>No questions found.</div>; // Show a message if there are no questions
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Quiz Question</h2>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionSelect(option)}
          disabled={selectedOption !== null}
        >
          {option}
        </button>
      ))}
      {selectedOption !== null && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default QuizComponent;
