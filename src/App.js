import './App.css';
import MyNavBar from './components/MyNavbar';
import MyHome from './components/MyHome';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyHome />
    </div>
  );
}

export default App;
