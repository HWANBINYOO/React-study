import { useRecoilValue } from "recoil";
import { countState } from "../recoil/count";

const ReadOnlyCount = () => {
  const count = useRecoilValue(countState); // 값만 보내준다

  return (
    <>
      <h2>읽기만 하는 컴포넌트</h2>
      <p>카운트 {count}</p>
    </>
  );
};

export default ReadOnlyCount;
