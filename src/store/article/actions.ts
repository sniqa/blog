import { ActionTypes, Article } from './actionTypes'

export const addArticleAction = (data: Article) => ({
	type: ActionTypes.ARTICLE_ADD,
	...data,
})

export const addArticlesAction = (data: Article[]) => ({
	type: ActionTypes.ARTICLES_ADD,
	data,
})
