import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라,
  //한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook을 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //onSubmit 이벤트
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //calue 값 초기화
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
