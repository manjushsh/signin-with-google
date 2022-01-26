import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInWithGoogle from '../signin-with-google-v1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id='spinnable-logo' src={logo} className="App-logo" alt="logo" />
        <div className='sign-in'><SignInWithGoogle /></div>
      </header>
    </div>
  );
}

export default App;
