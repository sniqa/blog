import _fetch, { SuccessResponse } from './fetch'
import { emitter, MittEventName } from './mitt'

interface User {
	account: string
	password: String
}

export const login = async (
	user: User,
	resole: (result: SuccessResponse) => void
) => {
	const { account, password } = user

	if (!(account && password)) {
		return emitter.emit(MittEventName.ALERT, `不能为空`)
	}

	return _fetch({ login: user }, resole)
}

export const createUser = async (user: User) => {
	// return await _fetch({ createUser: user })
}
