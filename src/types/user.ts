import { Gender_en } from '../constant/user'

// interface User {
// 	account: string
// 	password: string
// }
// interface UserToken {
// 	token: string
// }
export interface UserInfo {
	avatar?: string
	username?: string
	gender?: Gender_en
	signature?: string
}
