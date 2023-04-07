import { useState, useEffect } from "react";

export function useGetTodosFromLS() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('todos')){
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  return {todos, setTodos};
}