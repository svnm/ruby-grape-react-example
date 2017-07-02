import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import reducer from './reducers'
import Main from './components/Main'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Main
      games={store.getState()}
      onGetGames={() => action('GET_GAMES')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
