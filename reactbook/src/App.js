import EventPractice from './EventPractice';

function MyComponent(props){
  return (
    <div>
    제 이름은 {props.name}입니다.
    </div>
  );
};

function App() {
  return (
    <>
    <MyComponent name="펭귄"/>
    </>
  );
}

export default App;
