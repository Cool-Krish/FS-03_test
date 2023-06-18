import { useContext, useState } from "react";
import ContextApi from "./ContextApi";
import './style.css'


function AddTodo(){
    const [values, setValues] = useState('')
    const {addTodo} = useContext(ContextApi);

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
    </>
}

export default AddTodo;