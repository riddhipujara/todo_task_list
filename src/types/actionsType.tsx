import { IArr } from "./storeType";

export interface createTodoAction {
  type: "CREATE_TODO";
  todo: IArr;
}

export const actionIds = {
  CREATE_TODO: "CREATE_TODO",
};
