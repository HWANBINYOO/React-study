import React from "react";
// Hooks (x)
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

const useConfirmApp = () => {
  const deleteWorld = () => console.log("Delecting the word");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default useConfirmApp;
