import { useContext, useState } from "react";
import ContextApi from "./ContextApi";
import './style.css'
import { faPenNib, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AddTodo(){
    const [values, setValues] = useState('')
    const {addTodo,isEditing,handleEditFormSubmit, currentTodo, handleEditInputChange,setIsEditing} = useContext(ContextApi);

    const Submit = e => {
        if (!values) return;
        addTodo(values);
        setValues("");
      };

      
    return <>
    <div className="container">
        <input type="text" onChange={((e) => {setValues(e.target.value)})} placeholder="Add To DO..." />
        <button className="addbtn" onClick={Submit}>+</button>
    </div>
    {isEditing ? (
        <form className="Fcontainer" onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <div className="ubtn">
          <button type="submit"><FontAwesomeIcon icon={faPenNib} /></button>
          <button onClick={() => setIsEditing(false)}><FontAwesomeIcon icon={faXmark} /></button>
          </div>
        </form>
      ) : null}
    </>
}

export default AddTodo;