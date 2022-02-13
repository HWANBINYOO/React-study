# 컴포넌트

컴포넌트를 선언하는 방식은 함수형,클래스형 컴포넌트 입니다

---

함수형

```js
function App() {
  const name = `리액트`;
  return <div className=“react“>{name}</div>;
}
```

클래스형

```js
class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}
```

(함수형이 클래스보다 더 편하다)
