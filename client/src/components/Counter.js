import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice'
import Button from './Button'
import './Counter.css'
export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleDecrement=()=>dispatch(decrement())
  const handleIncrement=()=>dispatch(increment())
  return (
    <div className="app">
  <div>
  <div className="count">
    <h3>Count:</h3>
    <h1>{count}</h1>
  </div>
  <div className="buttons">
    <Button title={"-"} action={handleDecrement} />
    <Button title={"+"} action={handleIncrement} />
  </div>
</div>
</div>
    // <div>
    //   <div>
    //     <button
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       Increment
    //     </button>
    //     <span>{count}</span>
    //     <button
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       Decrement
    //     </button>
    //   </div>
    // </div>
  )
}


