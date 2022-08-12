import React from "react";
import { useState } from "react";

const FormTodo = () => {
    const [description, setDescription] = useState("")

    return (
        <div>
            <input 
                type="text" 
                value={description}
                onChange={event => setDescription(event.target.value)}>
            </input>
            <button>Add</button>
        </div>
    );
}

export default FormTodo;