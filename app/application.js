import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from  'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
  reducers,
  {},
  compose(
    autoRehydrate(),
    applyMiddleware(thunkMiddleware)
  )
)

persistStore(store, {}, () => {
  return startApplication()
})

const checkAuth = (nextState, replace) => {
  const authenticated = store.getState().user.authenticated
  const path = nextState.location.pathname

  if (path !== '/' && authenticated) return
  if (path === '/' && !authenticated) return
  if (!authenticated) return replace('/')
}

// containers
import Login from './containers/Login'


function startApplication() {
  render(
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path="/" component={Login}  onEnter={checkAuth} />
        <Redirect from='*' to='/' />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
