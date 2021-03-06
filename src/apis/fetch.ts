import { emitter, MittEventName } from './mitt'

const url = 'http://sniqa.com/gateway'

const request = (url: string, data: any) => {
	return new Request(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		mode: 'cors',
		cache: 'default',
	})
}

// const _fetch = (data: any) => {
// 	const $_fetch = () => {
// 		return fetch(requset(url, data))
// 			.then(function (response) {
// 				if (response.ok) {
// 					return response.json()
// 				}
// 				throw new Error('Network response was not ok.')
// 			})
// 			.then(function (myBlob) {
// 				return myBlob
// 			})
// 			.catch(function (error) {
// 				console.log(
// 					'There has been a problem with your fetch operation: ',
// 					error.message
// 				)
// 			})
// 	}

// 	return $_fetch
// }

export interface SuccessResponse {
	success: true
	data: any
	token?: string
}

export interface ErrorResponse {
	success: false
	code: number
	errMsg: string
}

interface ResponseTrue {
	[controller: string]: SuccessResponse
}

interface ResponseFalse {
	[controller: string]: ErrorResponse
}

export type ResponseState = ResponseFalse | ResponseTrue

export const useFetch = async <T = ResponseState>(
	request: Request,
	netError?: () => any,
	resolve?: (data: any) => any,
	reject?: (err: any) => void,
	final?: () => void
) => {
	return fetch(request)
		.then(function (response) {
			if (response.ok) {
				return response.json()
			}
			netError && netError()
		})
		.then<T>(function (data: T) {
			return resolve ? resolve(data) : data
		})
		.catch<T>(function (error) {
			return reject ? reject(error) : error
		})
		.finally(() => final && final())
}

const _fetch = async (
	data: any,
	resolv: (data: SuccessResponse) => void,
	final?: () => void
) =>
	useFetch(
		request(url, data),
		() => emitter.emit(MittEventName.ALERT, `network error`),
		(data) => {
			const res = Object.values(data)[0] as SuccessResponse | ErrorResponse
			if (res.success) {
				return resolv(res)
			} else {
				return emitter.emit(MittEventName.ALERT, res.errMsg)
			}
		},
		() => emitter.emit(MittEventName.ALERT, `network error`),
		() => final && final()
	)

export default _fetch
