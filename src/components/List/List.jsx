import React, { useReducer, useRef } from 'react'
import './index.css'
import ListItem from '../ListItem/ListItem'
const List = ({todos, setTodos}) => {
  const allCheck = useRef();

  const allCheckFunc = () => {
    if(allCheck.current.checked){
      todos.map(item => {
        item.isCompleted = true;
        return todos;
      })
      setTodos([...todos]);
    }else{
      todos.map(item => {
        item.isCompleted = false;
        return todos;
      })
      setTodos([...todos]);
    } 
  }
  const removeSelectedElements = () => {
    setTodos([...todos.filter(item => !item.isCompleted)]);
    allCheck.current.checked = false; 
  }
  // if(todos && todos.length === 0){
  //   allCheck.current.checked = false; 
  // }
  return (
    <>
      <div className='extra'>
        <div className='all-check'>
          <input {...((todos && todos.length === 0) && { checked: false })} onChange={() => allCheckFunc()} ref={allCheck} type="checkbox" id='allCheck' /> 
          <label htmlFor="allCheck">All selected</label>
        </div>
        <button onClick={() => removeSelectedElements()}>Selected remove</button>
      </div>
      <ul>
        {
          todos?.map((item) => {
            return <ListItem setTodos={setTodos} todos={todos} key={item.id} item={item} />
          })
        }
      </ul>
    </>
  )
}

export default List