# useReducer

useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook입니다

---

useReducer() 함수는 다음과 같은 형태로 사용을 합니다

```js
const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
```

---

> 카운터 컴포넌트로 예를 들어보겠습니다

```js
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
```

현재 카운트 값은 상태(state) 객체로부터 읽어오고, 카운트 값 변경을 위해서 각 버튼이 클릭 되었을때 dispatch 함수를 호출하도록 설정해주고 있습니다 dispatch 함수의 인자로 어떤 type 속성인지에 따라 `INCREMENT` 또는 `DECREMENT`를 넘겨줍니다.

```js
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
```

reducer함수는 `switch`문을이용해 카운트해줍니다
