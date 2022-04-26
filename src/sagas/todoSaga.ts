import { takeEvery, put, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../types/actionsType";
import { createTodoAction } from "../types/actionsType";

function* todoSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
}

function* createTodoWorker({ todo }: createTodoAction) {
  console.log(todo, "todo");
  const data: createTodoAction = {
    type: "CREATE_TODO",
    todo: todo,
  };
  yield put(data);
}

export default todoSaga;
