import {
	IndexRouteProps,
	LayoutRouteProps,
	PathRouteProps,
} from 'react-router-dom'

type RouteProps = (
	_props: PathRouteProps | LayoutRouteProps | IndexRouteProps
) => React.ReactElement | null

export default function RouteInterceptor(
	target: RouteProps,
	redirect: RouteProps,
	hook: () => boolean
) {
	return hook() ? target : redirect
}
