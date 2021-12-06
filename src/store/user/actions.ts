import { UserInfo } from '../../types/user'
import { Article } from '../article/actionTypes'
import {
	ActionTypes,
	LoginAction,
	LogoutAction,
	ModifyUserInfo,
	UserConfig,
} from './actionTypes'

export const loginAction = (data: UserConfig): LoginAction => ({
	type: ActionTypes.LOGIN,
	...data,
})

export const logoutAction = (): LogoutAction => ({
	type: ActionTypes.LOGOUT,
})

export const modifyUserInfoAction = (data: UserInfo): ModifyUserInfo => ({
	type: ActionTypes.MODIFY,
	...data,
})

export const getUserArticleAction = (articles: Article[]) => ({
	type: ActionTypes.GET_ARTICLES,
	articles,
})
