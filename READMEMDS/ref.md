# ref

HTML에서 id를 사용하여 특정 DOM요소애 접근하는 역할을 리액트 에선 ref를 사용합니다

ref 쓰는 경우
input에 focus 주기, 스크롤 박스 조작, Canvas 요소에 그림 그리기 등

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