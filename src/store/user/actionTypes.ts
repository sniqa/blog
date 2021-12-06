import { Gender_en } from '../../constant/user'
import { UserInfo } from '../../types/user'
import { Article } from '../article/actionTypes'

export enum ActionTypes {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
	MODIFY = 'MODIFY',
	ADD_ARTICLE = 'ADD_ARTICLE',
	DEL_ARTICLE = 'DEL_ARTICLE',
	MODIFY_ARTICLE = 'MODIFY_ARTICLE',
	GET_ARTICLES = 'GET_ARTICLES',
}

export interface UserConfig {
	token: string
	account: string
	username?: string
	avatar?: string
	gender?: Gender_en
	signature?: string
	articles?: Article[]
}

export type UserState = { isLogin: boolean } & UserConfig

export interface LoginAction extends UserConfig {
	type: ActionTypes.LOGIN
}

export interface LogoutAction {
	type: ActionTypes.LOGOUT
}

export interface ModifyUserInfo extends UserInfo {
	type: ActionTypes.MODIFY
}

export interface getArticles {
	type: ActionTypes.GET_ARTICLES
	articles: Article[]
}

export type Action = LoginAction | LogoutAction | ModifyUserInfo | getArticles
