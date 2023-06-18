import { createContext, useState} from "react";
import App from "../App";


const ContextApi = createContext()

export default ContextApi


export function CustomProvider(){
  const [todos, setTodos] = useState([
    { 
      id: 1,
      text: "This is a sample todo".trim(),
      isDone: false
    }
  ]);

  const addTodo = text => {
    let id = todos.length+1
    const newTodos = [...todos, { text, id}];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (<ContextApi.Provider value={{addTodo, todos, setTodos, markTodo, removeTodo}}>
       <App/>
  </ContextApi.Provider>)
}