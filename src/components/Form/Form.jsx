import React, { useRef } from 'react';
import './index.css';
import {v4 as uuid} from 'uuid'

const Form = ({setTodos, todos}) => {
  const textRef = useRef(null);
  const handlerForm = (e) => {
    e.preventDefault();
    if(textRef.current.value){
      const newObj = {
        id: uuid(),
        text: textRef.current.value,
        isCompleted: false
      }
      setTodos([...todos, newObj]);
      textRef.current.value = '';
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos));
  return (
    <>
      <form onSubmit={(e) => handlerForm(e)}>
        <div className='wrapper'>
          <input ref={textRef} type="text" placeholder='Enter your text' />
          <button type='submit'>ADD</button>
        </div>
      </form>
      
    </>
  )
}

export default Form