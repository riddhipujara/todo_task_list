import { IArr } from "../types/storeType";
import {
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "./actionsType";

export type createTodoActionCreator = (todo: IArr) => createTodoAction;
export type updateTodoActionCreator = (todo: IArr) => updateTodoAction;
export type deleteTodoActionCreator = (todoId: string) => deleteTodoAction;
