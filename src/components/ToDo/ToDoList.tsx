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
          <div>
            <button onClick={() => todoDeleteHandler(item.id)}>DELETE</button>
            <button onClick={() => todoEditHandler(item.id)}>EDIT</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
