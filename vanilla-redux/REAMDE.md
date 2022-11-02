# redux

## 리덕스 개념

- ### 액션

  상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생합니다. 액션객체는 type 필드를 반드시 가지고 있어야 합니다. 그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이며, 작성자 마음대로 넣을 수 있습니다

  (예시)

  ```js
  {
  type: ‘ADD_TODO‘,
  data: {
      id: 1,
      text: ‘리덕스 배우기‘
  }
  }
  ```

  - #### 액션 생성함수

    액션 생성 함수(action creator)는 액션 객체를 만들어 주는 함수입니다.

    ```js
    function addTodo(data) {
      return {
        type: "ADD_TODO",
        data,
      };
    }
    ```

    어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 실수로 정보를 놓치는 일을 방기하기 위해 이를 함수로 만들어서 관리합니다.

- ### 리듀서

  리듀서(reducer)는 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면 리튜서가 현재상태와 전달받은 액션 객체를 파라미터로 받아 옵니다. 그리도 두 값을 참고하여 새로운 상태를 만들어서 반환해 줍니다.

  (예시)

  ```js
  const initialState = {
    counter: 1,
  };
  function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          counter: state.counter + 1,
        };
      default:
        return state;
    }
  }
  ```

- ### 스토어

  프로젝트에 리덕스를 적용하기 위해 스로어(store)를 만듭니다. 한 개의 프젝트는 단 하나의 스토어만 가질 수 있습니다. 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가있고 몇가지 중요한 내장 함수를 지닙니다.

  - 디스패치

    스토어의 내장 함수 중 하나인 디스패시는`'액션을 발생시키는것`이라고 이해하면 됩니다. 이 함수는 `dispatch(action)`과 닽은 형태로 액션 객체를 파라이터로 넣어서 호출합니다.
    이 함수가 호출되면 스토어는 리튜서 함수를 실행시켜서 새로운 상태를 만들어 줍니다.

  - 구독

    스토어의 내장 함수 중 하나인 구독은 subcribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출됩니다.

    ```js
    const listener = () => {
      console.log("상태가 업데이트됨");
    };
    const unsubscribe = store.subscribe(listener);
    unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
    ```

- redux

✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action)
return하는 것은 application의 state가 됨
✅ action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
✅ dispatch : reducer에게 action을 보내는 방법
✅ subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행
✅ switch가 자주 쓰임
switch(action.type){
case ..blah..:
return smth
case ..blah2..:
return smth2
default:
return smth3
}
✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이
