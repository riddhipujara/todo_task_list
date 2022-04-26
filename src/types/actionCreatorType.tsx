import { IArr } from "../components/NewToDo/NewToDo.Model";
import { createTodoAction } from "./actionsType";

export type createTodoActionCreator = (todo: IArr) => createTodoAction;
