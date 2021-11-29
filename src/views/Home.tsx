import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Article from '../comps/Article'
import type { Store } from '../store/store'

export default function Home() {
	const articles = useSelector((state: Store) => state.article)

	return (
		<Fragment>
			{articles.map((article) => (
				<Article article={article} key={article.id}></Article>
			))}
		</Fragment>
	)
}
