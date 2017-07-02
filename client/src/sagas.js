import createSagaMiddleware from 'redux-saga'
import { takeLatest } from 'redux-saga'
import { fork, call, put, select , take} from 'redux-saga/effects';

export function* rootSaga() {
  yield[
    fork(loadGames),
    takeLatest('GET_GAMES', loadGames)
  ];
}

function* loadGames() {
  try {
    const result = yield call(getGames)
    yield put({type: 'FETCH_GAMES_SUCCESS', payload: result})
  } catch(error) {
    yield put({type: 'FETCH_GAMES_FAILED', error})
  }
}

function getGames() {
   return new Promise((resolve) => {
     fetch(`http://localhost:9292/api/get_games`)
     .then((response) => {
       return response.json()
     }).then((data) => {
       return resolve(data.response.games)
     })
   })
 }
