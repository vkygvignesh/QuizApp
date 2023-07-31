import React from 'react';
import './hmnv.css';
import ResponsiveAppBar from './Navbar';

const Hmnv = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="app">
        <div className="logo">
        </div>
        <span className="content">
          <h1><b>Welcome to the Quiz App</b></h1>
          <p>
            <h3 style={{textAlign:'justify'}}>Test your knowledge and challenge yourself with our interactive quiz
              app. Whether you're a trivia buff or just looking to learn something
              new, our quizzes cover a wide range of topics to suit every interest.
              Get ready to answer questions, earn points, and climb the leaderboard
              as you compete against other quiz enthusiasts. Let the journey begin!
            </h3>
          </p>
        </span>
      </div>
    </>
  );
}
export default Hmnv;
