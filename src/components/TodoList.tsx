import React from "react";
import "./TodoList.css";

interface iTodoList {
  todos: { id: string; text: string }[];
  todoDeleteHandler: (id: string) => void;
  todoEditHandler: (id: string) => void;
}

const TodoList: React.FC<iTodoList> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <div>
            <button onClick={() => props.todoDeleteHandler(item.id)}>
              DELETE
            </button>
            <button onClick={() => props.todoEditHandler(item.id)}>EDIT</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
