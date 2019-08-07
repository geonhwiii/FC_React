import React, { useState } from 'react';

function Counter() {
  const style = {
    color: 'orange',
    background: 'black',
    padding: 10,
  }

  const [number, setNumber] = useState(250);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1)
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1)
  }

  return (
    <div>
      <h1 style={style}>수양님 뭐하십니까 * {number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter;