import React from "react";
import { useState } from "react";
import CheckBox from "./checkBox";

const TaskList = props => {
    const {list} = props

    return (
        <div>
            {list.map(description => (
                <CheckBox description={description}></CheckBox>
            ))}
        </div>
    )
}

export default TaskList;