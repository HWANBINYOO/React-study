import React, { useEffect, useRef } from "react";

//클릭하면
const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      //함수가아니면 리턴
      return;
    }

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? element : undefined;
};

const useClickApp = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default useClickApp;
