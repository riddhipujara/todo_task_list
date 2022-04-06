import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

interface arr {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<arr[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [todoId, setTodoId] = useState<string>("");

  const todoAddHandler = (): void => {
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

  const todoChangeHandler = (text: string): void => {
    setTodoText(text);
  };

  const todoDeleteHandler = (todoId: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
    toast.success("Task deleted successfully");
  };

  const todoEditHandler = (todoId: string): void => {
    const todoData = todos.find((item) => item.id === todoId);
    setTodoId(todoId);
    setTodoText(`${todoData?.text}`);
  };

  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <NewTodo
                {...{
                  todoAddHandler,
                  todoDeleteHandler,
                  todos,
                  todoEditHandler,
                  todoChangeHandler,
                  todoText,
                  todoId,
                }}
              />
            }
          ></Route>
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
