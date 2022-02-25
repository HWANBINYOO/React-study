const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    // 사이트나가려고 할떄 경고문을 준다
    event.returnValue = "";
  };
  //beforeunload 는 window가 닫히기 전에 function이 실행되는걸 허락한다
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const UsePreventLeaveApp = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unotect</button>
    </div>
  );
};

export default UsePreventLeaveApp;
