# Props

props는 컴포넌트로 전달하는 데이터입니다(read-only)

```js
function MyComponent(props){
  return (
    <div>
    제 이름은 {props.name}입니다.
    </div>
  );
};

function App() {
  return (
    <>
    <MyComponent name="펭귄"/>
    </>
  );
}
```
Props 의 초기값을 정의할 수 있습니다( 구조 분해 할당)
```js
function MyComponent({name}){
  return (
    <div>
    제 이름은 {name}입니다.
    </div>
  );
};

function App() {
  return (
    <>
    <MyComponent name="펭귄"/>
    </>
  );
}
```