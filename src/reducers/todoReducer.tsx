import { Reducer } from "redux";
import { IArr } from "../types/storeType";
import { createTodoAction } from "../types/actionsType";

type actions = createTodoAction;

const initialState: IArr[] = [];

const todoReducer: Reducer<IArr[], actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        todo: [...state, action.todo],
      };
    default:
      return [...state];
  }
};

export default todoReducer;
