import {
	ActionTypes,
	LoginAction,
	LogoutAction,
	UserConfig,
} from './actionTypes'

export const loginAction = (data: UserConfig): LoginAction => ({
	type: ActionTypes.LOGIN,
	...data,
})

export const logoutAction = (): LogoutAction => ({
	type: ActionTypes.LOGOUT,
})
