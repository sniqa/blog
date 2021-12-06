// import { useSelector } from 'react-redux'
// import { Store } from '../store'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'
import { Store } from '../store'
import { MainRoute } from './routes'

export default function RequireArticle({
	children,
}: {
	children: JSX.Element
}) {
	const articles = useSelector((state: Store) => state.article)
	const location = useLocation()

	return articles.length > 0 ? (
		children
	) : (
		<Navigate to={MainRoute.HOME} state={{ from: location }} />
	)
}
