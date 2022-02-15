# todo-app

<!-- [실행결과]() -->

1. TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여 줍니다. children으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다.

2. TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 인풋의 상태를 관리합니다.

3. TodoListItem: 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여 줍니다.

4. TodoList: todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.

---

> 괜찮은 코드

input value 값 입력받는 함수
onChange 함수를 작성하는데 이 과정에서 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라, 한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook을 사용한다

```js
const onChange = useCallback((e) => {
  setValue(e.target.value);
}, []);
```

함수 map을 사용하여 특정 id를 가지고 있는 객체의 checked 값을 반전시켜 주었다

```js
const onToggle = useCallback(
  (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  },
  [todos]
);
```

> 성능 최적화 하기

새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣을 수도 있다 이를 함수형 업데이트라고 부른다

전

```js
const onRemove = useCallback(
  (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  },
  [todos]
);
```

후

```js
const onRemove = useCallback((id) => {
  setTodos((todos) => todos.filter((todo) => todo.id !== id));
}, []);
```
