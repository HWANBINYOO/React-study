Fragment 사용이유

JSX 를 쓸 때, return 문 안에는 반드시 하나의 최상위 태그가 있어야 한다
그럼 의미없는 div 가 추가되는데 그걸 피하기 위해서 사용한다

``` js function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
  );
}
```
<> </> 로도 표현 가능하다

``` js function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
```
