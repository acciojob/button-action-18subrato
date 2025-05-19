import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  function handleClick(){
    let p = document.getElementById('para');
      p.classList.remove('hide');
      p.classList.add('show');
  }
  return (
    <div className="App" id="main">
      <p className="hide" id='para'>"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy".</p>
      <button id='click' onClick={handleClick}>click</button>
    </div>
  );
}

export default App
