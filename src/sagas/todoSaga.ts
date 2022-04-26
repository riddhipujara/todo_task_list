import { takeEvery, put, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../types/actionsType";
import {
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "../types/actionsType";

function* todoSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
  yield takeEvery(actionIds.UPDATE_TODO, updateTodoWorker);
  yield takeEvery(actionIds.DELETE_TODO, deleteTodoWorker);
}

function* updateTodoWorker({ todo }: updateTodoAction) {
  const data: updateTodoAction = {
    type: "UPDATE_TODO_SUCCESS",
    todo: todo,
  };
  yield put(data);
}

function* createTodoWorker({ todo }: createTodoAction) {
  const data: createTodoAction = {
    type: "CREATE_TODO_SUCCESS",
    todo: todo,
  };
  yield put(data);
}

function* deleteTodoWorker({ todoId }: deleteTodoAction) {
  const data: deleteTodoAction = {
    type: "DELETE_TODO_SUCCESS",
    todoId: todoId,
  };
  yield put(data);
}

export default todoSaga;
