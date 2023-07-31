import React, { useState } from 'react'
import "./Sample.css"

function Sample () {
  const [currentQues,setCurrentQues]=useState(0)
  const nextQuestion=(e)=>{
   setCurrentQues(currentQues+1);
    
  }
  const data=[{
    question:"What is your name?",
    options:["option 1","option 2","option 3","option 4"],
    answer:"option 3"}
    ,{
      question:"What is your age?",
      options:["option 1","option 2","option 3","option 4"],
      answer:"option 3"}
  ]

  return (
    <div>
      <h1>{data[currentQues].question}</h1>
      {
       data[currentQues].options.map((option,index)=>(<button key={index}>{option}</button>))
      }
      <button onClick={nextQuestion}>Next</button>
      
     
    </div>
    
  )
}

export default Sample