import { useConter } from "../hooks/useConter"


export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useConter()

  return (
    <>
        <h1>Counter with custom hook: {counter}</h1>
        <button onClick={() => increment()}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => decrement()}>-1</button>
    </>
  )
}
