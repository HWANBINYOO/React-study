# useEffect

useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다
클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방합니다

사용하는 방법은 총 3가지정도입니다

1.

```js
useEffect(()=>{
    console.log('렌더링 될 때 마다 실행된다.);
});
```

2. useEffect를 렌더링 후 단 한번만 실해하고 싶을 때 사용하는 방법입니다.

```js
useEffect(()=>{
    console.log('마운트 될 때 만 실행된다.);
},[]);
```

3.

```js
useEffect(()=>{
    console.log(name);
    console.log('업데이트 될 때 실행된다.);
},[name]);
```
