import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <Todos />
    </>
  );
}

export default App;
