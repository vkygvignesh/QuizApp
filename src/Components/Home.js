import React from 'react';
import './home.css'; 
import { Link, useNavigate } from 'react-router-dom';


const Homepage =  () => {
    const navigate = useNavigate();

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
          <button className="quiz-button" onClick={() => navigate('/sampletwo') }>Individual</button>
        </div>
        <div className='no2'>
          <button className="quiz-button" onClick={() => navigate(`/pin/${2}`)}>Educational</button>
        </div>
          <div className='no3'>
            <button className="quiz-button" onClick={() => navigate(`/pin/${3}`)}>Buissness</button></div>
        </div>
    </div>
    );

}

export default Homepage;
