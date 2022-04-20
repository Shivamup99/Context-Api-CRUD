import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'
import ListItem from './ListItem'

function Lists() {
  const [todos , setTodos] = useContext(DataContext)
  const switchComplete =id=>{
    const newTodos =[...todos]
    newTodos.forEach((todo,index)=>{
      if(index===id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }

  const handleEditTodos =(editvalue ,id)=>{
    const newTodods =[...todos]
    newTodods.forEach((todo,index)=>{
      if(index===id){
        todo.name=editvalue
      }
    })
    setTodos(newTodods)
  }
  
  return (
    <>
    <ul>
      {
        todos.map((todo,index)=>(
          <ListItem todo={todo} key={index} id={index}
          checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>
        ))
      }
    </ul>
    </>
  )
}

export default Lists