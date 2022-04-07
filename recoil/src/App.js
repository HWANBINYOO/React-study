import React from "react";
import ReadOnlyCount from "./component/ReadOnlyCount";
import ReadWriteCount from "./component/ReadWriteCount";

function App() {
  return (
    <>
      <ReadOnlyCount />
      <ReadWriteCount />
    </>
  );
}

export default App;
