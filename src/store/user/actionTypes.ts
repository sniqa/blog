export enum ActionTypes {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
}

export interface UserConfig {
	token: string
	account: string
	username: string
	avatar: string
	gender: boolean
	signature: string
}

export type UserState = { isLogin: boolean } & UserConfig

export interface LoginAction extends UserConfig {
	type: ActionTypes.LOGIN
}

export interface LogoutAction {
	type: ActionTypes.LOGOUT
}

export type Action = LoginAction | LogoutAction
