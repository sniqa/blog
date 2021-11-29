import { Action, ActionTypes, UserState } from './actionTypes'

const initial: UserState = {
	isLogin: false,
	token: '',
	account: '',
	username: '',
	avatar: '',
	gender: true,
	signature: '',
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

		default:
			return state
	}
}
