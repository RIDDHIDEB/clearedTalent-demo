import React from 'react';
import Menu from "./components/Menu";
import './App.css';
import SignIn from './components/SignIn';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
