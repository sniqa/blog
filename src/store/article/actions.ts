import { ActionTypes, Article } from './actionTypes'

export const addArticleAction = (data: Article) => ({
	type: ActionTypes.ARTICLE_ADD,
	...data,
})
