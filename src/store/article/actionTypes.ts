export interface Article {
	author: string
	id?: string
	title: string
	content: string
	like?: number
	watch?: number
	comment?: number
	createTime?: string
	updateTime?: string
	img?: string
	alt?: string
}

export enum ActionTypes {
	ARTICLE_ADD = 'ARTICLE_ADD',
	ARTICLE_DEL = 'ARTICLE_DEL',
	ARTICLE_UPDATE = 'ARTICLE_UPDATE',
	ARTICLE_SEARCH = 'ARTICLE_SEARCH',
	ARTICLE_REPLY = 'ARTICLE_REPLY',
	ARTICLE_WATCHED = 'ARTICLE_WATCHED',
	ARTICLE_LIKED = 'ARTICLE_LIKED',
}

export interface AddArticle extends Article {
	type: ActionTypes.ARTICLE_ADD
}

export type Action = AddArticle
