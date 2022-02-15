import React, { useRef, useCallback, useState } from 'react';


const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });



// input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value]
      });
    },
    [form]
  );



// form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };



      <span class="co44">// array</span><span class="co44">에</span> <span class="co44">새</span> <span class="co44">항목</span> <span class="co44">등록</span>
      <span class="co47">setData</span><span class="co33">({</span>
        <span class="co35">...</span><span class="co33">data,</span>
        array: data.array.concat(info)
      });
        <span class="co44">// form </span><span class="co44">초기화</span>
        <span class="co47">setForm</span><span class="co33">({</span>
          name: '',
          username: ''
        });
        nextId.current += 1;
      },
      [data, form.name, form.username]
    );
  
    // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );



return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange ={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default App;