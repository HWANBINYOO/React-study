### input 설정(일부 키값 안되게 하기, 글자수 제한 걸기 )

```js
import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  //input 값이 바꼈을떄
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      //항상업데이트 될 수 있게 하기
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  // @를 누르면 동작하지 않게 하기
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
```
