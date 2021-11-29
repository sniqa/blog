import { combineReducers, createStore } from 'redux'
import { reducer as articelReducer } from './article/reducers'
import { reducer as userReducer } from './user/reducers'

const reducers = combineReducers({
	user: userReducer,
	article: articelReducer,
})

export type Store = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store
