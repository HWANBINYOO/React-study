import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(){
  function byFn(){
    console.log("bye :(");
  }

  function hiFn(){
    console.log("Created");
    return byFn;
  }
  
  useEffect(hiFn, [])
    return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
