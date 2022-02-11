# style 넣는법

background-color처럼 - 문자가 포함되는 이름이 있는데요. 이러한 이름은 - 문자를 없애고 작성합니다(카멜표기법)

---

```js
function App() {
  const name = `리액트스타일`;
  const style = {

    backgroundColor: `blue`,
    color: `aqua`,
    fontSize: `18px`,
    padding: 16px
  };
  return <div style={style}>{name} </div>;
}
```
