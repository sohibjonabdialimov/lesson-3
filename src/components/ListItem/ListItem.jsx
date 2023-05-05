import React, { useEffect, useRef, useState } from 'react'
import './index.css'
const ListItem = ({item, todos, setTodos}) => {
  const checkRef = useRef();
  const textRef = useRef();
  const deleteBtn = (id) => {
    setTodos([...todos.filter((item) => {
      return item.id !== id;
    })])
  }
  localStorage.setItem('todos', JSON.stringify(todos));
  const editBtn = (id) => {
    let findedElement = todos.find(item => item.id === id);
    let editText = prompt(null,`${findedElement.text}`);
    if(editText && editText !== ''){
      findedElement.text = editText;
      setTodos([...todos]);
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos));

  const completedFunc = (id) => {
    if(checkRef.current.checked){
      const findedElement = todos.find(item => item.id === id);
      findedElement.isCompleted = true;
      setTodos([...todos]);
    }else{
      const findedElement = todos.find(item => item.id === id);
      findedElement.isCompleted = false;
      setTodos([...todos]);
    }
  }


  localStorage.setItem('todos', JSON.stringify(todos));


  return (
    <div className='items'>
      <input onChange={() => completedFunc(`${item.id}`)} ref={checkRef} type="checkbox" {...(item.isCompleted ? { checked: true } : { checked: false })} />
      <p className={item.isCompleted ? 'checkTrue' : null} ref={textRef}>{item.text}</p>
      <div className="buttons">
        <button className='btn' onClick={() => editBtn(`${item.id}`)}>Edit</button>
        <button className='btn' onClick={() => deleteBtn(`${item.id}`)}>Delete</button>
      </div>
    </div>
  )
}

export default ListItem