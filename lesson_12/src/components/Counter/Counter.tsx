import React, { useState } from 'react'

interface CounterState {
    count: number;
    lastUpdated: Date | null;
}

const Counter = () => {
    const [counter, setCounter] = useState<CounterState>({ count: 0, lastUpdated: null });

    const increment = () => {
        setCounter(prev => ({
            count: prev.count + 1,
            lastUpdated: new Date()
        }));
    };

    return (
        <div>
            <p>Count: {counter.count}</p>
            {counter.lastUpdated && <p>Last updated: {counter.lastUpdated.toLocaleTimeString()}</p>}
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;