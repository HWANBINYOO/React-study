Fragment 사용이유

JSX 를 쓸 때, return 문 안에는 반드시 하나의 최상위 태그가 있어야 함
의미없는 div를 피라기위해서사용한다

`` js function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
  );
}
``
<> </> 로도 표현 가능하다

`` js function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
``
