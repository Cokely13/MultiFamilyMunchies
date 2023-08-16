import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import itemsReducer from './allItems'
import listsReducer from './allLists'
import singleListReducer from './singleList'
import auth from './auth'

const reducer = combineReducers({ auth,
allItems: itemsReducer,
allLists: listsReducer,
singleList: singleListReducer,
 })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
