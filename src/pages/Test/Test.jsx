import React from 'react'
import { useState } from 'react'

const Test = () => {

    // JS code here ourside of return
    // var count=0

    // const increaseCount = () => {
    //     count += 1
    //     console.log(count)
    // }

    // const decreaseCount = () => {
    //     count -= 1
    //     console.log(count)
    // }

    // IN REACT above Js code dosn't work but using the useState
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1)
        console.log(count)
    }

    const decreaseCount = () => {
        setCount(count-1)
        console.log(count)
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Test