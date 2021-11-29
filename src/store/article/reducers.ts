import { Action, ActionTypes, Article } from './actionTypes'
// import {} from

const initial: Article = {
	author: '',
	id: '',
	title: '',
	content: '',
	like: 0,
	watch: 0,
	comment: 0,
	createTime: '',
	updateTime: '',
	img: '',
	alt: '',
}

export const reducer = (state: Article[] = [], action: Action) => {
	const { type, ...res } = action

	switch (type) {
		case ActionTypes.ARTICLE_ADD: {
			state.push({ ...initial, ...res })
			return state
		}

		default: {
			return state
		}
	}
}
