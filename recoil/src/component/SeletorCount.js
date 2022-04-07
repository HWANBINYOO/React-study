import { useRecoilState, useRecoilValue } from "recoil";
import { countState, inputState, countInputState } from "../recoil/count";

const SelectorCount = () => {
  const [count, setCount] = useRecoilState(countState);
  const [input, setInput] = useRecoilState(inputState);
  const countInput = useRecoilValue(countInputState);
  return (
    <>
      <h2>읽기 쓰기 카운트 컴포넌트</h2>
      <p>카운트 {count}</p>
      <p>selector {countInput}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        - 1
      </button>
    </>
  );
};

export default SelectorCount;
