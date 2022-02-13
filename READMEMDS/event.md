# event

소문자 대신 camelCase를 사용합니다
ex(onclick => onClick)

문자열이 아닌 함수로 전달합니다
ex(
onClick="함수이름()" (x)
onClick={함수이름} (o)
)

---

input 에서 입력하는 이벤트는 onChange 로 대신합니다

```js
App() {
    return (
      <>
        <input
          onChange={(e) => {console.log(e);}
          }
        />
      </>
    );
}
```
