// import React, { useState } from 'react';
// import './admindata.css';
// import axios from 'axios';
// import { type } from '@testing-library/user-event/dist/type';


// const QuizForm = () => {
//   const [question, setQuestions] = useState([]);
//   const [formData, setFormData] = useState({
//     type: '',
//     question: '',
//     option1: '',
//     option2: '',
//     option3: '',
//     option4: '',
//     answer: '',
//     score: 0,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddQuestion = () =>
//    {
//     setQuestions([...question, formData]);
//     setFormData({
//       type: '',
//       question: '',
//       option1: '',
//       option2: '',
//       option3: '',
//       option4: '',
//       answer: '',
//       score: 0,
//     }
//     );
//     axios
//       .post("http://localhost:2023/Userdetails",
//       {
//         type: type ,
//       question:question ,
//       option1: option1,
//       option2: option2,
//       option3: option3,
//       option4: option4,
//       answer: answer,
//       score: 0,
//       })
//       .then((response) => {
//         alert("Question "+" added!");
        
//       }).catch(error => {
//         alert("error==="+error);
//       });
//   };

//   return (
//     <div className="quiz-form" style={{backgroundColor:"#F4E0B9"}}>
//       <h2>Add Quiz Questions</h2>
//       <div>
//         <label style={{color:"#2D4356"}}>Type(1,2,3):</label>
//         <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Question:</label>
//         <input type="text" name="question" value={formData.question} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Option 1:</label>
//         <input type="text" name="option1" value={formData.option1} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Option 2:</label>
//         <input type="text" name="option2" value={formData.option2} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Option 3:</label>
//         <input type="text" name="option3" value={formData.option3} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Option 4:</label>
//         <input type="text" name="option4" value={formData.option4} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Answer:</label>
//         <input type="text" name="answer" value={formData.answer} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label style={{color:"#2D4356"}}>Score:</label>
//         <input type="number" name="score" value={formData.score} onChange={handleInputChange} />
//       </div>
//       <br/>
//       <button onClick={handleAddQuestion}>Add Question</button>

//       <hr />
//       {question.map((question, index) => (
//         <div key={index} className="question">
//           <p><strong>Type:</strong> {question.type}</p>
//           <p><strong>Question:</strong> {question.question}</p>
//           <p><strong>Option 1:</strong> {question.option1}</p>
//           <p><strong>Option 2:</strong> {question.option2}</p>
//           <p><strong>Option 3:</strong> {question.option3}</p>
//           <p><strong>Option 4:</strong> {question.option4}</p>
//           <p><strong>Answer:</strong> {question.answer}</p>
//           <p><strong>Score:</strong> {question.score}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuizForm;
import React, { useState } from 'react';
import './admindata.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';



const QuizForm = () => {
  const [type, settype] = useState('');
  const [question, setquestion] = useState('');
  const [option1, setoption1] = useState('');
  const [option2, setoption2] = useState('');
  const [option3, setoption3] = useState('');
  const [option4, setoption4] = useState('');
  const [answer, setanswer] = useState('');
  const [score, setscore] = useState('');
  const [errors, setErrors] = useState({});
  
  // const navigate=useNavigate();

  const validateForm = () => {
    const newErrors = {};
  
    if (type.trim() === '') {
      newErrors.type = 'Type is required';
    } 
  
    if (question.trim() === '') {
      newErrors.question = 'question is required';
    } 
  
    if (option1.trim() === '') {
      newErrors.option1 = 'option1 is required';
    } 
  
    if (option2.trim() === '') {
      newErrors.option2 = 'option2 is required';
    } 
  
    if (option3.trim() === '') {
      newErrors.option3 = 'option3 is required';
    } 
    if (option4.trim() === '') {
      newErrors.option4 = 'option4 is required';
    } 
    if (answer.trim() === '') {
      newErrors.answer = 'Answer is required';
    } 
    if (score.trim() === '') {
      newErrors.score = 'score is required';
    } 
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid)
     {
      console.log('Quiz Questions', {
        type,
        question,
        option1,
        option2,
        option3,
        option4,
        answer,
        score
      });
      axios
      .post("http://localhost:2023/addques",
      {
        type: type,
        question: question,
        option1: option1,
        option2:option2,
        option3: option3,
        option4: option4,
        answer:answer,
        score: score,
      })
      .then((response) => {
        alert("question " +" added!");
        settype("");
        setquestion("");
        setoption1("");
        setoption2("");
        setoption3("");
        setoption4("");
        setanswer("");
        setscore("");


       
      }).catch(error => {
        alert("error==="+error);
      });
    }

  };

  return (
    <div className="ques">
      <div className="ques-container" style={{backgroundColor:"#F6C391"}}>
         <div className='tle' >
        <h2 style={{color:"#0c0101"}}>ADD QUESTION</h2>
        </div>
        <form onSubmit={handleAddQuestion}>
          <div className="quizbox-container">
            {/* <label htmlFor="firstName" style={{color:'orange'}}><b><h3>FIRST NAME:</h3></b></label> */}
            <input
              type="Numbers"
              id="type"
              placeholder='Type(1,2,3)'
              value={type}
              onChange={(e) => settype(e.target.value)}
              className={errors.type ? 'input-error' : ''}
            />
            {errors.type && <p className="error">{errors.type}</p>}
          </div>
            <div className="quizbox-container">
            {/* <label htmlFor="lastName" style={{color:'orange'}}><b><h3>LAST NAME:</h3></b></label> */}
            <input
              type="text"
              id="question"
              placeholder='Question'
              value={question}
              onChange={(e) => setquestion(e.target.value)}
              className={errors.question ? 'input-error' : ''}
            />
            {errors.question && <p className="error">{errors.question}</p>}
         </div>
          <div className="quizbox-container">
            {/* <label htmlFor="username" style={{color:'orange'}}><b><h3>USER NAME</h3></b></label> */}
            <input
              type="text"
              id="option1"
              placeholder='Option1'
              value={option1}
              onChange={(e) => setoption1(e.target.value)}
              className={errors.option1 ? 'input-error' : ''}
            />
            {errors.option1 && <p className="error">{errors.option1}</p>}
          </div>
          <div className="quizbox-container">
            {/* <label htmlFor="email" style={{color:'orange'}}><b><h3>EMAIL:</h3></b></label> */}
            <input
              type="text"
              id="option2"
              placeholder='Option2'
              value={option2}
              onChange={(e) => setoption2(e.target.value)}
              className={errors.option2 ? 'input-error' : ''}
            />
            {errors.option2 && <p className="error">{errors.option2}</p>}
          </div>
          <div className="quizbox-container">
            {/* <label htmlFor="password" style={{color:'orange'}}><b><h3>PASSWORD:</h3></b></label> */}
            <input
              type="text"
              id="option3"
              placeholder='option3 '
              value={option3}
              onChange={(e) => setoption3(e.target.value)}
              className={errors.option3 ? 'input-error' : ''}
            />
            {errors.option3 && <p className="error">{errors.option3}</p>}
          </div>
        <div className="quizbox-container">
            {/* <label htmlFor="password" style={{color:'orange'}}><b><h3>PASSWORD:</h3></b></label> */}
            <input
              type="text"
              id="option4"
              placeholder='option4 '
              value={option4}
              onChange={(e) => setoption4(e.target.value)}
              className={errors.option4 ? 'input-error' : ''}
            />
            {errors.option4 && <p className="error">{errors.option4}</p>}
          </div>
         <div className="quizbox-container">
            {/* <label htmlFor="password" style={{color:'orange'}}><b><h3>PASSWORD:</h3></b></label> */}
            <input
              type="text"
              id="answer"
              placeholder='answer '
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
              className={errors.answer ? 'input-error' : ''}
            />
            {errors.answer && <p className="error">{errors.answer}</p>}
          </div>
        <div className="quizbox-container">
            {/* <label htmlFor="password" style={{color:'orange'}}><b><h3>PASSWORD:</h3></b></label> */}
            <input
              type="text"
              id="score"
              placeholder='score '
              value={score}
              onChange={(e) => setscore(e.target.value)}
              className={errors.score ? 'input-error' : ''}
            />
            {errors.score && <p className="error">{errors.score}</p>}
          </div>
          <br/>
          <button className="question-button" type="submit">
          ADD QUESTION
          </button>
          <br/>
          <button className="Edit-button" type="submit">
          EDIT QUESTION
          </button>
        </form>
      </div>
    </div>
  );
};
export default QuizForm;