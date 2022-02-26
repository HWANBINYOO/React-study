import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    //마우스가 페이지 밖으로 빠져나갈 때 발생하는 이벤트
    document.addEventListener("mouseleaver", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const useBeforLeaveApp = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default useBeforLeaveApp;
