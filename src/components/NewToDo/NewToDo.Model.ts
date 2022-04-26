import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  updateTodoActionCreator,
} from "../../types/actionCreatorType";
import { IArr } from "../../types/storeType";

export interface AppPropType {
  todos: IArr[];
  createTodo: createTodoActionCreator;
  updateTodo: updateTodoActionCreator;
  deleteTodo: deleteTodoActionCreator;
}

export interface IObj {
  id: string;
  name: string;
  desc: string;
  status: string;
  priority: string;
}

export const initialState = {
  id: "",
  name: "",
  desc: "",
  status: "Open",
  priority: "",
};
