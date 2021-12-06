import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findArticle } from '../apis/article'
import Article from '../comps/Article'
import { addArticlesAction } from '../store/article/actions'
import type { Store } from '../store/store'
import Loading from './Loading'

export default function Home() {
	const articles = useSelector((state: Store) => state.article)

	const dispatch = useDispatch()

	// const getArticles = useCallback(() => {
	// 	findArticle((data) => {
	// 		dispatch(addArticlesAction(data.data))
	// 	})
	// }, [dispatch])
	// const g = useCallback(() => dispatch, [dispatch])

	useEffect(() => {
		if (articles.length > 0) return
		findArticle((data) => {
			dispatch(addArticlesAction(data.data))
		})
	}, [dispatch, articles])

	if (articles.length === 0) return <Loading></Loading>

	return (
		<div
			className={`flex flex-col justify-center md:items-center overflow-y-auto`}>
			{articles.map((article) => (
				<Article {...article} key={article._id}></Article>
			))}
		</div>
	)
}
