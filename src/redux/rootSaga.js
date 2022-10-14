import { all } from "redux-saga/effects"
import { moviesSagas } from "./movieSagas"

export default function* rootSaga() {
  //all is run when running multiple sagas
  yield all([...moviesSagas])
}
