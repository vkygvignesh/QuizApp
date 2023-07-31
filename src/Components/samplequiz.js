import React, { useState, useEffect } from 'react';
import axios from 'axios';


const QuizQuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const BASE_URL="http://localhost:2023/";

  useEffect(() => {
    
    console.log(fetchQuestions());
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(BASE_URL+'showques');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-question-page">
      {!showScore ? (
        <>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion]?.question}</p>
          <div className="options">
            {questions[currentQuestion]?.options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next Question</button>
        </>
      ) : (
        <>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
};

export default QuizQuestionPage;
