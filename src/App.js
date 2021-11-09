import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING!');

  const toogleButtonHandler = () => {
    setShowParagraph((showParagraph) => !showParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      {/* <DemoOutput show={showParagraph} /> */}
      <DemoOutput />
      <Button onClick={toogleButtonHandler}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;
