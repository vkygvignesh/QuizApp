import React, { useState } from 'react';
import getquiz from './Apiservices';
import './Sampletwo.css';

const SampleTwo = () => {
  const [quizData, setQuizData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const fetchQuizData = async () => {
    try {
      const response = await getquiz();
      setQuizData(response.data); // Assuming the API response contains an array of quiz questions
      setShowResult(false);
      setSelectedOptions({});
      setCurrentQuestionIndex(0);
      setQuizSubmitted(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [quizData[currentQuestionIndex].id]: option,
    }));
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
    setQuizSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowResult(false);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setShowResult(false);
  };

  if (!quizData) {
    return (
      <div>
        <p>Loading quiz data...</p>
        <button onClick={fetchQuizData} disabled={quizData}>
          Start Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex]; // Current question based on the current index
  const totalQuestions = quizData.length;
  const userScore = Object.values(selectedOptions).filter((option) => option === currentQuestion.answer).length * 10;

  return (
    <div className='quiz-container'>
      <h2 style={{color:"black"}}>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.option1 === selectedOptions[currentQuestion.id] ? (
          <button className='selected' onClick={() => handleOptionClick(currentQuestion.option1)} disabled={showResult}>
            {currentQuestion.option1}
          </button>
        ) : (
          <button onClick={() => handleOptionClick(currentQuestion.option1)} disabled={showResult}>
            {currentQuestion.option1}
          </button>
        )}
        {/* Remaining options follow a similar pattern */}
        {currentQuestion.option2 === selectedOptions[currentQuestion.id] ? (
          <button className='selected' onClick={() => handleOptionClick(currentQuestion.option2)} disabled={showResult}>
            {currentQuestion.option2}
          </button>
        ) : (
          <button onClick={() => handleOptionClick(currentQuestion.option2)} disabled={showResult}>
            {currentQuestion.option2}
          </button>
        )}
        {/* Remaining options follow a similar pattern */}
        {currentQuestion.option3 === selectedOptions[currentQuestion.id] ? (
          <button className='selected' onClick={() => handleOptionClick(currentQuestion.option3)} disabled={showResult}>
            {currentQuestion.option3}
          </button>
        ) : (
          <button onClick={() => handleOptionClick(currentQuestion.option3)} disabled={showResult}>
            {currentQuestion.option3}
          </button>
        )}
        {/* Remaining options follow a similar pattern */}
        {currentQuestion.option4 === selectedOptions[currentQuestion.id] ? (
          <button className='selected' onClick={() => handleOptionClick(currentQuestion.option4)} disabled={showResult}>
            {currentQuestion.option4}
          </button>
        ) : (
          <button onClick={() => handleOptionClick(currentQuestion.option4)} disabled={showResult}>
            {currentQuestion.option4}
          </button>
        )}
        {/* Add options for option3 and option4 */}
      </div>

      {showResult && (
        <p>
          Your answer: {selectedOptions[currentQuestion.id]}
          {selectedOptions[currentQuestion.id] === currentQuestion.answer ? ' (Correct)' : ' (Incorrect)'}
        </p>
      )}

      {!showResult && (
        <div>
          <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous Question
          </button>
          {currentQuestionIndex < totalQuestions - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <button onClick={handleCheckAnswer} disabled={!selectedOptions[currentQuestion.id]}>
              Submit
            </button>
          )}
        </div>
      )}

      {quizSubmitted && currentQuestionIndex === totalQuestions - 1 && (
        <div>
          <p>Your final score: {userScore}out of {totalQuestions * 10}</p>
        </div>
      )}
    </div>
  );
};

export default SampleTwo;
