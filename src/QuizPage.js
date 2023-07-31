import React, { useState } from 'react';
import './QuizPage.css';

const QuizPage = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Rome']
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Mercury']
    }
  ];

  const handleAnswerChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers:', answers);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="question">
            <h2 className="question-text">Question {question.id}:</h2>
            <p>{question.question}</p>
            <div className="options-container">
              {question.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    className="option-input"
                    
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuizPage;
