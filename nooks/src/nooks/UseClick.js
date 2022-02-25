import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    //함수가아니면 리턴
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListner("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener;
      }
    };
  }, []);
  return element;
};

const UseClickApp = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref="title">Hi</h1>
    </div>
  );
};

export default UseClickApp;
