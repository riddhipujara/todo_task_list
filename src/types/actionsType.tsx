import { IArr } from "./storeType";

export interface createTodoAction {
  type: "CREATE_TODO_SUCCESS";
  todo: IArr;
}

export interface updateTodoAction {
  type: "UPDATE_TODO_SUCCESS";
  todo: IArr;
}

export interface deleteTodoAction {
  type: "DELETE_TODO_SUCCESS";
  todoId: string;
}

export const actionIds = {
  CREATE_TODO: "CREATE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
};
