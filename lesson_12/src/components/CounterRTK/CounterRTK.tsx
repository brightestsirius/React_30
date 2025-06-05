import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { increment, decrement } from '../../store/features/counter/counterSlice';

const CounterRTK = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <p>RTK Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment RTK</button>
            <button onClick={() => dispatch(decrement())}>Decrement RTK</button>
        </div>
    );
};
export default CounterRTK;