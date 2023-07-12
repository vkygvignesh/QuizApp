import React from 'react';
// import ReactDOM from 'react-dom/client';
import Hmnv from './Components/hmnv';
import Registerpage from './Components/Registerpage';
import Loginpage   from './Components/loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Sample from './Components/Sample';

function App()
 {
  return (
    <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Hmnv/>}/>
    <Route exact path='/reg'element={<Registerpage/>}/>
    <Route exact path='/h'element={<Home/>}/>
    <Route exact path='/login'element={<Loginpage/>}/>
    <Route exact path ='/sample' element={<Sample/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App