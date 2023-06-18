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
  
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

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
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }
  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  return (<ContextApi.Provider value={{addTodo, todos, setTodos, markTodo, removeTodo,isEditing, handleEditFormSubmit, currentTodo, handleEditInputChange,setIsEditing, handleEditClick}}>
       <App/>
  </ContextApi.Provider>)
}