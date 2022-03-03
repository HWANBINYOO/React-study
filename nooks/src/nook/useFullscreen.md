### 전체화면이 되게하는 버튼과 나가기 버튼

```js
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      //사진을 전체화면으로 바꿈
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    //전체화면에서 나가기
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFulllS = (isFull) => {
    console.log(isFull ? "We are full" : " we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulllS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
```
