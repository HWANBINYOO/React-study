# useRef

useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다

## ref란

HTML에서 id를 사용하여 특정 DOM요소애 접근하는 역할을 리액트 에선 ref를 사용합니다

ref 쓰는 경우

1. input에 focus 주기
2. 스크롤 박스 조작
3. Canvas 요소에 그림 그리기 등

---

클래스형 컴포넌트

```js
<input
  ref={(ref) => {
    this.input = ref;
  }}
/>
```

함수형 컴포넌트

```js
const refname = useRef();
```
