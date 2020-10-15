import React, {createContext, PropsWithChildren, useContext} from "react";

interface Context {
  counter: number
  increment: () => void
  decrement: () => void
}

const willThrow = () => {
  throw new Error('Context is not initialized');
}

const defaultValue: Context = {
  counter: 0,
  increment: willThrow,
  decrement: willThrow
};

const Context = createContext(defaultValue)

export const useCounterContent = () => useContext(Context);

export const CounterProvider = (props: PropsWithChildren<{}>) => {

  const [counter, setCounter] = React.useState(0)
  const increment = () => {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 500)
  }
  const decrement = () => setCounter(counter - 1)

  const CounterContext: Context = {
    counter,
    increment,
    decrement
  }

  return <Context.Provider value={CounterContext}>{props.children}</Context.Provider>
}
