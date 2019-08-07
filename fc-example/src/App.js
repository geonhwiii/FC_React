import React, { useRef, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'ggit',
      email: 'abc123@gmail.com'
    },
    {
      id: 2,
      username: 'hong',
      email: 'def456@naver.com'
    },
    {
      id: 3,
      username: 'jeong',
      email: 'cxz789@daum.net'
    }
  ]);

  // 굳이 리렌더링 값이 아닐 때는 useRef로 변수를 관리하는 것도 좋다.
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user])
    setInputs({
      username: '',
      email: '',
    })
    console.log(nextId.current) // 4
    nextId.current += 1
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
