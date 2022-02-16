# immer

구조가 복잡한 객체도 매우 쉽고 짧은 코드를 사용하여 `불변성`을 유지하면서 업데이트해 줄 수 있는 라이브러리입니다

### 불변성이란?

사전적으로 값이나 상태를 변경할 수 없는 것을 의미합니다

### 쓰는이유

불변성을 유지하기위해서 아래 보기와 같이 얕은 복사를 하게되는데 그러면 코드가 길어지고 구조의 깊이가 깇어질 수록 상태는 접근조차 어려워 질 수 있습니다

```js
const [state, setState] = useState({
  id: 1,
  name: stan,
});

setState({
  ...state,
  nickName: beda,
});
```

이러한 문제를 해결하기 위해 불변성을 유지시켜주면서 코드를 단순하고 직관적으로 짤 수 있는 immer를 씁니다

produce 함수 기본 형태

```js
const newxtState = produce(currentState, (draft) => {
  funtion;
});
```

-currentState: 업데이트하고자 하는 현재 상태값
-draft: 현재 상태값을 복사하여 사용
-function : 어떻게 없데이트하고 싶을지 정의하는 함수

적용결과

```js
import produce from "immer";

const [state, setState] = useState({
  id: 1,
  name: stan,
});

setState(
  produce(state, (draft) => {
    draft.nickName = beda;
  })
);
```
