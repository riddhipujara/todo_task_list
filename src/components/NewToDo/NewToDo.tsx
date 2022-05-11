import React, { useState } from "react";
import TodoList from "../ToDo/ToDoList";
import { ToastContainer, toast } from "react-toastify";
import NewToDoModal from "./NewToDoModal";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { SelectChangeEvent } from "@mui/material/Select";
import pick from "lodash.pick";
import { IObj, initialState, AppPropType } from "./NewToDo.Model";
import { Button, Box } from "@mui/material";
import { connect } from "react-redux";
import storeType from "../../types/storeType";
import { createTodo, updateTodo, deleteTodo } from "../../action/";
import get from "lodash.get";

const NewTodo: React.FC<AppPropType> = ({
  todos,
  createTodo,
  updateTodo,
  deleteTodo,
}) => {
  const [todoData, setTodoData] = useState<IObj>({
    ...initialState,
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const todoAddHandler = (): void => {
    if (todoData.id !== "") {
      updateTodo(todoData);
      toast.success("Task Updated successfully");
      clearStateHandler();
      todoModalHandler();
    } else {
      const dataObj = {
        ...todoData,
        id: Math.random().toString(),
      };
      createTodo(dataObj);
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
    deleteTodo(todoId);
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
      <Box component="main" sx={{ flexGrow: 1, p: 4, mt: 4 }}>
        <Tooltip title="Create Task">
          <Button
            onClick={todoModalHandler}
            size="small"
            startIcon={<AddIcon />}
            sx={{ mb: 2, mt: 2 }}
            color="primary"
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
      </Box>
    </>
  );
};

const mapStateToProps = (state: storeType) => {
  return {
    todos: get(state, "todos.todos"),
  };
};

export default connect(mapStateToProps, { createTodo, updateTodo, deleteTodo })(
  NewTodo
);
