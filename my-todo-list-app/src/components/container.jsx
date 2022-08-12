import React from "react";
import FormTodo from "./formTodo";
import TaskList from "./taskList";
import { useState } from "react";

const Container = () => {
    const [list, setList] = useState(['ejemplo1', 'ejemplo2', 'ejemplo3'])

    return (
        <div className="container">
            <FormTodo list={list} setList={setList}/>
            <TaskList list={list}/>
        </div>
    );
};

export default Container;