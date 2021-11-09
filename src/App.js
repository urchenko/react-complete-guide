import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

// import React, { useState, useCallback } from 'react';

// import Button from './components/UI/Button/Button';
// import DemoOutput from './components/Demo/DemoList';

// import './App.css';

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [allowToogle, setAllowToogle] = useState(false);

//   console.log('APP RUNNING!');

//   const toogleButtonHandler = useCallback(() => {
//     if (allowToogle) {
//       setShowParagraph((showParagraph) => !showParagraph);
//     }
//   }, [allowToogle]);

//   const allowToogleHandler = () => {
//     setAllowToogle(true);
//   };

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       {/* {showParagraph && <p>This is new!</p>} */}
//       {/* <DemoOutput show={showParagraph} /> */}
//       <DemoOutput show={showParagraph} />
//       <DemoOutput title={showParagraph} />
//       <Button onClick={allowToogleHandler}>Allow Toogling!</Button>
//       <Button onClick={toogleButtonHandler}>Toogle Paragraph!</Button>
//     </div>
//   );
// }

// export default App;
