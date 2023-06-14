import React from "react";
import './TodoList.css'


const Todolist=({todos,setTodos})=>{
    return(
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input
                    type="text"
                    value={todo.title}
                    className="list"
                    onChange={(event)=> event.preventDefault()}
                    />

                    <button className="button-complete task-button">
                      <i className="fa fa -check-circle"></i>
                    </button>
                    <button className="button-edit task-button">
                      <i className="fa fa -edit"></i>
                    </button>
                    <button className="button-delete task-button">
                      <i className="fa fa -trash"></i>
                    </button>

                </li>

            ))}
        </div>

    )
}

export default Todolist;