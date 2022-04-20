import React, { useContext, useState } from "react";
import { DataContext } from "../DataProvider";

function FormInput() {
    const [todos ,setTodos] = useContext(DataContext)
    const [todoName,setTodoName] = useState('');

    const formSubmit =(e)=>{
      e.preventDefault();
      setTodos([...todos ,{name:todoName ,complete:false}]);
      setTodoName('');
    }
  return (
    <>
      <form autoComplete="off" onSubmit={formSubmit}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Enter your riquirnments to do"
          value={todoName}
          onChange={(e)=>setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default FormInput;
