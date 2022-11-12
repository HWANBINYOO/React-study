# redux

✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action)
return하는 것은 application의 state가 됨

✅ action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)

✅ dispatch : reducer에게 action을 보내는 방법

✅ subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행

✅ switch가 자주 쓰임
```js
switch(action.type){
  case ..blah..:
    return smth
  case ..blah2..:
    return smth2
  default:
    return smth3
}
```

✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이

redux-react

연결하기

React Redux에는 Provider컴포넌트를 통해 앱의 다른 컴포넌트에서 Redux store를 사용할 수 있다

```
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  < Provider store={store} >
    < App / >
  < /Provider >
)
```

### useSelector()

selector함수를 사용하여 Redux store state의 데이터를 가져올 수 있습니다.

### useDispatch()

이 훅은 Redux store에서 dispatch 함수에 대한 참조를 반환합니다.

### createAction()

Redux action type 및 creator를 정의하기 위한 helper 함수다.

### createReducer()

이 표기법은 조금 더 짧지만 TypeScript가 아닌 JavaScript에서만 작동하고 IDE와의 통합이 적으므로 대부분의 경우 "Builder Callback" 표기법을 추천한다.(타입스크립트 사용시 추천 방법)

※ createReducer()에서는 새로운 state를 리턴하거나 state를 mutate할 수 있다.
※ 뭔가를 리턴할 때는 새로운 state여야만한다.
