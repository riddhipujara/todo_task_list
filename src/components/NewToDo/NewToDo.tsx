import React, { useState } from "react";
import TodoList from "../ToDo/ToDoList";
import { ToastContainer, toast } from "react-toastify";
import NewToDoModal from "./NewToDoModal";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { SelectChangeEvent } from "@mui/material/Select";
import pick from "lodash.pick";
import { IArr, IObj, initialState } from "./NewToDo.Model";
import { Button } from "@mui/material";

const NewTodo: React.FC = () => {
  const [todos, setTodos] = useState<IArr[]>([]);
  const [todoData, setTodoData] = useState<IObj>({
    ...initialState,
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const todoAddHandler = (): void => {
    if (todoData.id !== "") {
      const objIndex = todos.findIndex((item) => item.id === todoData.id);
      todos[objIndex] = {
        ...todoData,
      };
      setTodos([...todos]);
      toast.success("Task Updated successfully");
      clearStateHandler();
      todoModalHandler();
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          ...todoData,
          id: Math.random().toString(),
        },
      ]);
      toast.success("Task Added successfully");
      clearStateHandler();
      todoModalHandler();
    }
  };

  const clearStateHandler = (): void => {
    setTodoData({ ...initialState });
  };

  const todoInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    todoData[name as keyof IObj] = value;
    setTodoData({ ...todoData });
  };

  const todoInputSelectHandler = (event: SelectChangeEvent): void => {
    const { name, value } = event.target;
    todoData[name as keyof IObj] = value;
    setTodoData({ ...todoData });
  };

  const todoDeleteHandler = (todoId: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
    toast.success("Task Deleted successfully");
  };

  const todoEditHandler = (todoId: string): void => {
    todoModalHandler();
    let todoObj = todos.find((item) => item.id === todoId);
    setTodoData({
      ...initialState,
      ...pick(todoObj, ["id", "name", "desc", "status", "priority"]),
    });
  };

  const todoModalHandler = (): void => {
    clearStateHandler();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Tooltip title="Create Task">
        <Button
          onClick={todoModalHandler}
          size="small"
          startIcon={<AddIcon />}
          sx={{ mb: 2 }}
          color="secondary"
          variant="outlined"
        >
          Create Task
        </Button>
      </Tooltip>
      {modalOpen && (
        <NewToDoModal
          {...{
            todoModalHandler,
            todoInputSelectHandler,
            modalOpen,
            todoInputChangeHandler,
            todoAddHandler,
            todoData,
          }}
        />
      )}
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
