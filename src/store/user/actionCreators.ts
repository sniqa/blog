import type { Dispatch } from 'react'
import { loginAction, logoutAction } from './actions'
import type { Action, UserConfig } from './actionTypes'

export const loginActionCreator = (data: UserConfig) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch(loginAction(data))
	}
}

export const logoutActionCreator = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch(logoutAction())
	}
}
