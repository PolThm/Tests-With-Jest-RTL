import React from 'react';
import {useCounterContent} from "../context";

const Counter: React.FC = () => {
  const {counter, increment, decrement} = useCounterContent();

  return (
    <div className="text-center mt-16">
      <h1 className="ml-4 mb-6 underline">COUNTER</h1>
      <h2 className="ml-4 mb-4" data-testid="counter">{counter}</h2>
      <button className="p-3 ml-4 w-20 border border-black rounded shadow hover:bg-blue-200" onClick={increment}>Up</button>
      <button className="p-3 ml-4 w-20 border border-black rounded shadow hover:bg-blue-200" onClick={decrement}>Down</button>
    </div>
  );
};

export default Counter;
