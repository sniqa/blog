import { Gender_en } from '../../constant/user'
import { Action, ActionTypes, UserState } from './actionTypes'

const initial: UserState = {
	isLogin: false,
	token: '',
	account: '',
	username: '',
	avatar: '',
	gender: Gender_en.MALE,
	signature: '',
	articles: [],
}

export const reducer = (state = initial, action: Action) => {
	const { type, ...res } = action
	switch (type) {
		case ActionTypes.LOGIN: {
			return (state = { ...initial, ...res, isLogin: true })
		}

		case ActionTypes.LOGOUT: {
			return (state = initial)
		}

		case ActionTypes.MODIFY: {
			state = { ...state, ...res }

			return state
		}

		case ActionTypes.GET_ARTICLES: {
			state = {
				...state,
				articles: [...(state.articles || []), ...action.articles],
			}
			return state
		}

		default:
			return state
	}
}
