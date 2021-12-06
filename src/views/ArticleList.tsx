import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findArticle } from '../apis/article'
import Article from '../comps/Article'
import type { Store } from '../store/store'
import { getUserArticleAction } from '../store/user/actions'

export default function ArticleList() {
	const { account, articles = [] } = useSelector((state: Store) => state.user)

	const dispatch = useDispatch()

	// findArticle(
	// 	(data) => {
	// 		dispatch(getUserArticleAction(data.data))
	// 	},
	// 	{ account }
	// )

	useEffect(() => {
		if (articles.length > 0) return
		findArticle(
			(data) => {
				dispatch(getUserArticleAction(data.data))
			},
			{ account }
		)
	}, [account, dispatch, articles])

	const isEmpty = articles.length !== 0

	return (
		<div
			className={`flex flex-col justify-center md:items-center overflow-auto`}>
			{isEmpty ? (
				articles.map((article) => (
					<Article {...article} key={article._id}></Article>
				))
			) : (
				<Typography>空空如也</Typography>
			)}
		</div>
	)
}
