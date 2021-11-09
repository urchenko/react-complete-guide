import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);

  console.log('APP RUNNING!');

  const toogleButtonHandler = useCallback(() => {
    if (allowToogle) {
      setShowParagraph((showParagraph) => !showParagraph);
    }
  }, [allowToogle]);

  const allowToogleHandler = () => {
    setAllowToogle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      {/* <DemoOutput show={showParagraph} /> */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToogleHandler}>Allow Toogling!</Button>
      <Button onClick={toogleButtonHandler}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;
