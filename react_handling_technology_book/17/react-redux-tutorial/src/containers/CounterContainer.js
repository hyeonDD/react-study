// import { bindActionCreators } from 'redux';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

/* const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
        );
    }; */

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

/* const mapStateToProps = (state) => ({
        number: state.counter.number,
    });
    
    const mapDispatchToProps = (dispatch) => ({
        // 임시 함수
        increase: () => {
            dispatch(increase());
        },
        decrease: () => {
            dispatch(decrease());
        },
    }); */

// import { connect } from 'react-redux';
/* export default connect(
        (state) => ({
            number: state.counter.number,
        }),
        {
            increase,
            decrease,
        },
        )(CounterContainer); */
