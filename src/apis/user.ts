import { UserInfo } from '../types/user'
import _fetch, { SuccessResponse } from './fetch'
import { emitter, MittEventName } from './mitt'

interface User {
	account: string
	password: String
}

export const login = async (
	user: User,
	resole: (result: SuccessResponse) => void,
	final?: () => void
) => {
	const { account, password } = user

	if (!(account && password)) {
		return emitter.emit(MittEventName.ALERT, `不能为空`)
	}

	return _fetch({ login: user }, resole, final)
}

export const createUser = async (
	user: User,
	resole: (result: SuccessResponse) => void,
	final?: () => void
) => {
	const { account, password } = user

	if (!(account && password)) {
		return emitter.emit(MittEventName.ALERT, `不能为空`)
	}

	return _fetch({ createUser: user }, resole, final)
}

export const modifyUserInfo = async (
	token: string,
	user: UserInfo,
	resole: (result: SuccessResponse) => void,
	final?: () => void
) => {
	if (!token) {
		return emitter.emit(MittEventName.ALERT, `修改失败，请检查登录信息`)
	}

	return _fetch({ modifyUserInfo: { token, ...user } }, resole, final)
}
