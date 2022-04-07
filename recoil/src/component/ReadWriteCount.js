import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { countState } from "../recoil/count";

const ReadWriteCount = () => {
  const [count, setCount] = useRecoilState(countState); // useState 형식
  const setCountRecoil = useSetRecoilState(countState); // 값을 변경하는 함수만 반환 (useState 의 set부분)
  const resetCount = useResetRecoilState(countState); //기본값으로 리셋

  return (
    <>
      <h2>읽기 쓰기 카운트!</h2>
      <p>카운트 {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCountRecoil(count + 1)}>
        +1 (useSetRecoilState 사용)
      </button>
      <button onClick={() => setCountRecoil(count - 1)}>
        -1 (useSetRecoilState 사용)
      </button>
      <button onClick={resetCount}>카운트 리셋</button>
    </>
  );
};

export default ReadWriteCount;
