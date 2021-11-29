import _fetch, { SuccessResponse } from './fetch'
import { emitter, MittEventName } from './mitt'

interface Article {
	author: string
	title: string
	content: string
}

export const createArticle = async (
	article: Article,
	resole: (data: SuccessResponse) => void
) => {
	const { author, title, content } = article

	if (!(author && title && content)) {
		return emitter.emit(MittEventName.ALERT, `文章标题或内容不能为空`)
	}

	await _fetch({ createArticle: article }, resole)
}
