import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Counter number={0} />
      <hr />
      <Todos />
    </>
  );
}

export default App;
