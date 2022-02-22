//이제는 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아 오고,
//또 액션도 디스패치해 줄 차례입니다.
//리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부릅니다.
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
//connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
//mapStateToProps는 리덕스 스토어 안의 상태를
//컴포넌트의 props로 넘겨주기 위해 설정하는 함수이고,

//mapDispatchToProps는 액션 생성 함수를
//컴포넌트의 props로 넘겨주기 위해 사용하는 함수입니다.
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  //임시 함수
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
