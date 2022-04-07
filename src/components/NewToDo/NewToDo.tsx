import React, { useState } from "react";
import "./NewToDo.css";
import TodoList from "../ToDo/ToDoList";
import { ToastContainer, toast } from "react-toastify";

interface arr {
  id: string;
  text: string;
}

const NewTodo: React.FC = () => {
  const [todos, setTodos] = useState<arr[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [todoId, setTodoId] = useState<string>("");

  const todoAddHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    if (todoId) {
      const objIndex = todos.findIndex((item) => item.id === todoId);
      todos[objIndex].text = todoText;
      setTodos([...todos]);
      toast.success("Task Updated successfully");
      setTodoId("");
      setTodoText("");
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: todoText },
      ]);
      toast.success("Task Added successfully");
      setTodoText("");
    }
  };

  const todoInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTodoText(e.target.value);
  };

  const todoDeleteHandler = (todoId: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
    toast.success("Task Deleted successfully");
  };

  const todoEditHandler = (todoId: string): void => {
    const todoData = todos.find((item) => item.id === todoId);
    setTodoId(todoId);
    setTodoText(`${todoData?.text}`);
  };

  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input
            type="text"
            id="todo-text"
            onChange={todoInputChangeHandler}
            value={todoText}
          />
        </div>
        <button onClick={(e) => todoAddHandler(e)}>
          {todoId ? `UPDATE TODO` : `ADD TODO`}
        </button>
      </form>
      <ToastContainer />
      <TodoList
        todos={todos}
        todoDeleteHandler={todoDeleteHandler}
        todoEditHandler={todoEditHandler}
      />
    </>
  );
};

export default NewTodo;
