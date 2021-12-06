export interface Article {
	account: string
	title: string
	content: string
	_id?: string
	like?: number
	watch?: number
	comment?: number
	createTime?: string
	updateTime?: string
	cover?: string
	summary?: string
	category?: string
}

export enum ActionTypes {
	ARTICLE_ADD = 'ARTICLE_ADD',
	ARTICLES_ADD = 'ARTICLES_ADD',
	ARTICLE_OWN_ADD = 'ARTICLE_OWN_ADD',
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

export interface AddArticles {
	type: ActionTypes.ARTICLES_ADD
	data: Article[]
}

export interface AddOwnArticles {
	type: ActionTypes.ARTICLE_OWN_ADD
	data: Article[]
}

export type Action = AddArticle | AddArticles | AddOwnArticles
