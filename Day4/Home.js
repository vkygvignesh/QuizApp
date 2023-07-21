import React from 'react';
import './home.css'; 
import { Link } from 'react-router-dom';


class Homepage extends React.Component {
  render() {
    return ( 
      <div className="home-page">
        <div className='contnt'>
        <div className='txt'>
          <p><h1>-- Let's Start --</h1></p>
          <p style={{color:"#ffffff"}}><h2><b>Its time to take quiz</b></h2></p>
        </div>
        <div className='t1'>
          <p style={{color:"#ffffff"}}><b><h2><b> Choose an option from these </b></h2></b></p>
        </div>
        </div>
        <div className='but'>
        <div className='n1'>
          <button className="quiz-button" onClick={() => this.startQuiz('Individual') }><Link to={'/pin'} style={{color:'black'}}>Individual</Link></button>
        </div>
        <div className='no2'>
          <button className="quiz-button" onClick={() => this.startQuiz('Educational')}><Link to={'/pedu'} style={{color:'black'}}>Educational</Link></button>
        </div>
          <div className='no3'>
            <button className="quiz-button" onClick={() => this.startQuiz('Buissness')}><Link to={'/pbus'} style={{color:'black'}}>Buissness</Link></button></div>
        </div>
    </div>
    );
  }

  startQuiz(difficulty) 
  {
    console.log(`Starting ${difficulty} quiz...`);
  }
}

export default Homepage;
