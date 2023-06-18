import { useContext } from "react";
import ContextApi from "./ContextApi";


function Display() {
    const { todos, markTodo, removeTodo } = useContext(ContextApi)
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