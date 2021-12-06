import { SuccessResponse, useFetch } from './fetch'
import { emitter, MittEventName } from './mitt'

const url = 'http://sniqa.com/upload'

const requset = (url: string, data: FormData) => {
	return new Request(url, {
		method: 'POST',
		body: data,
		headers: new Headers(),
		mode: 'cors',
		cache: 'default',
	})
}

export const upload = async (
	files: File | FileList,
	resolv: (data: SuccessResponse) => void,
	final?: () => void
) => {
	const formData = new FormData()

	if (Array.isArray(files)) {
		for (let i = 0; i < files.length; i++) {
			formData.append(`filename`, files[i])
		}
	} else {
		formData.append(`filename`, files as File)
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useFetch(
		requset(url, formData),
		() => emitter.emit(MittEventName.ALERT, `network error`),
		(data) => {
			if (data.success) {
				return resolv(data)
			} else {
				return emitter.emit(MittEventName.ALERT, data.errMsg)
			}
		},
		() => emitter.emit(MittEventName.ALERT, `network error`),
		() => final && final()
	)
}
