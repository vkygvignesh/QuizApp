import React from 'react';
// import ReactDOM from 'react-dom/client';
import Hmnv from './Components/hmnv';
import Registerpage from './Components/Registerpage';
import Loginpage from './Components/loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Sample from './Components/Sample';
import Ain from './Components/ain';
import Aedu from './Components/aedu';
import Abus from './Components/abus';
import Pin from './Components/pin';
import Pedu from './Components/pedu';
import Pbus from './Components/pbus';
import QuizPage from './QuizPage';
import AdminPage from './Components/admin';
import Quizdata from './Components/admindata';
import QuizQuestionPage from './Components/samplequiz';
import SampleTwo from './Components/SampleTwo';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quizpage" element={<QuizPage/>}/>
        <Route exact path='/' element={<Hmnv />} />
        <Route exact path='/register' element={<Registerpage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Loginpage />} />
        <Route exact path='/sample' element={<Sample />} />
        <Route exact path='/ain' element={<Ain />}/>
        <Route exact path='/aedu' element={<Aedu />} />
        <Route exact path='/abus' element={<Abus />} />
        <Route exact path='/pin/:type' element={<Pin />} />
        <Route exact path='/admin' element={<AdminPage />}/>
        <Route exact path='/admindata' element={<Quizdata/>}/>
        <Route exact path='/samplequiz' element={<QuizQuestionPage/>}/>
        <Route exact path="/sampletwo" element={<SampleTwo/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App