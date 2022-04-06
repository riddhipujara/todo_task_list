import React from "react";
import "./NewTodo.css";
import TodoList from "./TodoList";

interface iList {
  todos: { id: string; text: string }[];
  todoText: string;
  todoAddHandler: () => void;
  todoDeleteHandler: (id: string) => void;
  todoEditHandler: (id: string) => void;
  todoChangeHandler: (text: string) => void;
  todoId: string;
}

const NewTodo: React.FC<iList> = (props) => {
  const {
    todoAddHandler,
    todoChangeHandler,
    todos,
    todoText,
    todoDeleteHandler,
    todoEditHandler,
    todoId,
  } = props;
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    todoAddHandler();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todoChangeHandler(e.target.value);
  };

  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input
            type="text"
            id="todo-text"
            onChange={handleChange}
            value={todoText}
          />
        </div>
        <button onClick={submitHandler}>
          {todoId ? `UPDATE TODO` : `ADD TODO`}
        </button>
      </form>
      <TodoList
        todos={todos}
        todoDeleteHandler={todoDeleteHandler}
        todoEditHandler={todoEditHandler}
      />
    </>
  );
};

export default NewTodo;
