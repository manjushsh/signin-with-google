import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInWithGoogleV2 from '../signin-with-google-v2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='sign-in'><SignInWithGoogleV2 /></div>
      </header>
    </div>
  );
}

export default App;
