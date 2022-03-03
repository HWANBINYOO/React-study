### comtirm 띄우기

Hooks (x)

```js
import React from "react";
const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      //확인창 띄우기
      callback();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Delecting the word");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
```
