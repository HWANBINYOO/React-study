### 온라인,오프라인인지 알려준다

```js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
  // navigator.onLine 브라우저의 온라인 상태를 반환한다
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      setStatus(navigator.onLine);
    }
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("offline", handleChange);
      window.removeEventListener("online", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
```
