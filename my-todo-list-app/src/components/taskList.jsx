import React from "react";
import { useState } from "react";
import CheckBox from "./checkBox";

// crear function
const TaskList = () => {
    const [list, setList] = useState(['ejemplo1', 'ejemplo2', 'ejemplo3'])

    return (
        <div>
            {list.map(description => (
                <CheckBox description={description}></CheckBox>
            ))}
        </div>
    )
}

// export funcion
export default TaskList;