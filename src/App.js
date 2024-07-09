import './App.css';
import MyNavBar from './components/MyNavbar';
import MyHome from './components/MyHome';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyRegister from './components/MyRegister';
import MyUnregister from './components/MyUnregister';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Router>
        <Routes>
          <Route path="/" element={<MyHome/>} />
          <Route path="/register" element={<MyRegister/>} />
          <Route path="/unregister" element={<MyUnregister/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
