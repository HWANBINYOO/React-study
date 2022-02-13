# map

반복되는 컴포넌트를 렌더링하기위해 사용합니다

---

```js
const names = ["눈사람", "얼음", "눈", "바람"];

function App() {
  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
```
