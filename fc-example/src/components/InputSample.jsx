import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({ name: '', nickname: '' })
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const onReset = () => {
    setInputs({ name: '', nickname: '' });
    nameInput.current.focus();
  }

  return (
    <div>
      <input ref={nameInput} type="text" name="name" placeholder="이름" value={name} onChange={onChange}/>
      <input type="text" name="nickname" placeholder="닉네임" value={nickname} onChange={onChange}/>
      <button onClick={onReset}>클릭!</button>
      <div>
        <h2>값 : {name}({nickname})</h2>
      </div>
    </div>
  )
}

export default InputSample;