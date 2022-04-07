import React from "react";
import "./ToDoList.css";

interface iTodoList {
  todos: { id: string; text: string }[];
  todoDeleteHandler: (id: string) => void;
  todoEditHandler: (id: string) => void;
}

const TodoList: React.FC<iTodoList> = (props) => {
  const { todos, todoDeleteHandler, todoEditHandler } = props;
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => todoDeleteHandler(item.id)} className="btn_ml">
            DELETE
          </button>
          <button onClick={() => todoEditHandler(item.id)}>EDIT</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
