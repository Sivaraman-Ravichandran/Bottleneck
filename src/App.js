import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Todo from "./Todo";
function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  const nextTodo=()=>{
    navigate('/todo');
  }
  const addItems = () => {
    if (!name) {
      alert("Enter your name:");
      return;
    }
    const newItem = {
      id: Math.floor(Math.random() * 100),
      name: name
    };
    setData((oldData) => [...oldData, newItem]);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addItems}>click me</button>
      <button onClick={nextTodo}>next</button>
      <Todo value={data}/>
    </div>
  );
}

export default App;
