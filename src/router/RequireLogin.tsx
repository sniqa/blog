// import { useSelector } from 'react-redux'
// import { Store } from '../store'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'
import { Store } from '../store'
import { MainRoute } from './routes'

export default function RequireLogin({ children }: { children: JSX.Element }) {
	const { isLogin } = useSelector((state: Store) => state.user)
	const location = useLocation()

	return isLogin ? (
		children
	) : (
		<Navigate to={MainRoute.LOGIN} state={{ from: location }} />
	)
}
