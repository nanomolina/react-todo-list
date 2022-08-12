import React from "react";
import FormTodo from "./formTodo";
import TaskList from "./taskList";

// crear function
const Container = () => {
    return (
        <div className="container">
            <FormTodo />
            <TaskList />
        </div>
    );
};

// export funcion
export default Container;