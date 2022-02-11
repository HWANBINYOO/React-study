import EventPractice from './EventPractice';

function App() {
  // return (
  //   <>
  //   <EventPractice />
  //   </>
  // );
  const name = `리액트`;
  return <div>{name === `리액트` && <h1>리액트입니다.</h1>}</div>;
}

export default App;
