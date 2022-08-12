import React from "react";
import { useState } from "react";

const FormTodo = props => {
    const {list, setList} = props
    const [description, setDescription] = useState("")

    const addDescriptionToList = () => {
        setList([...list, description])
    }

    return (
        <div>
            <input 
                type="text" 
                value={description}
                onChange={event => setDescription(event.target.value)}>
            </input>
            <button onClick={addDescriptionToList}>Add</button>
        </div>
    );
}

export default FormTodo;