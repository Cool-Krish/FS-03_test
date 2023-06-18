import { useContext } from "react";
import ContextApi from "./ContextApi";
// import { faEdit, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Display() {
    const { todos, markTodo, removeTodo,handleEditClick } = useContext(ContextApi)
    return <>
        <div className="Discontainer">
            {
                todos.map((item, index) => {
                    return <>
                        <div className="subcontainer">
                        <div className="todotext">
                            <p style={{ textDecoration: item.isDone ? "line-through" : "" }}>{item.text}</p>
                            
                        </div>
                        <div className="cbtn">
                        <button className="editbtn" onClick={() => handleEditClick(item)}><FontAwesomeIcon icon={faEdit} /></button>
                            <button className="editbtn" onClick={() => markTodo(index)}>✓</button>{' '}
                            <button className="editbtn" onClick={() => removeTodo(index)}>✕</button>
                        </div>
                        </div>
                    </>
                })
            }
        </div>
    </>
}

export default Display;