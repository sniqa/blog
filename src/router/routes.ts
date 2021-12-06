// export enum MainRoute {
// 	HOME = '',
// 	LOGIN = '/login',
// 	CREATE_USER = '/createUser',
// 	ABOUT = '/about',
// 	PERSONAL = '/personal',
// 	EDITOR = '/editor',
// 	CREATE_ARTICLE = '/createArticle',
// 	ARTICLES = '/article',
// }

export enum MainRoute {
	HOME = '/',
	USER = '/user',
	ARTICLE = '/article',
	LOGIN = '/login',
	PERSONAL = '/personal',
	SEARCH = '/search',
}

export enum HomeChildRoute {}

export enum UserChildRoute {
	PERSONAL = 'personal',
	ARTICLE_LIST = 'articlelist',
}

export enum ArticleChildRoute {
	ARTICLE_ID = ':id',
}
