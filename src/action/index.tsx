import { createTodoActionCreator } from "../types/actionCreatorType";
import { IArr } from "../components/NewToDo/NewToDo.Model";

export const createTodo: createTodoActionCreator = (todo: IArr) => {
  return {
    type: "CREATE_TODO",
    todo,
  };
};
