# useState

state값을 변경해야 할 때 함수형 컴포넌트에서 쓰이는 훅입니다

> state란?  
> state는 기본적으로 object이며,컴포넌트 자신이 가지고 있는 속성 값입니다.

---

사용하려면 useState를 import를 해줘야 합니다.

```js
import { useState } from "react";

const [<상태 값 저장 변수>, <상태값 갱신 함수>] = useState(<상태 초기값>); \\선언방식
```

> [참고자료](https://www.daleseo.com/react-hooks-use-reducer/)
