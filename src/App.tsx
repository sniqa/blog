import { createTheme, ThemeProvider } from '@mui/material'
import { lazy, Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './comps/Layout'
import UserLayout from './comps/UserLayout'
import RequireArticle from './router/RequireArticle'
import RequireLogin from './router/RequireLogin'
import { ArticleChildRoute, MainRoute, UserChildRoute } from './router/routes'
import About from './views/About'
import AlertMsg from './views/Alert'
import Home from './views/Home'
import Loading from './views/Loading'
import NotFound from './views/NotFound'

const theme = createTheme({
	palette: {
		secondary: {
			// This is green.A700 as hex.
			main: '#212121',
		},
	},
})

export default function App() {
	const Login = lazy(() => import('./views/Login'))
	const Personal = lazy(() => import('./views/Personal'))
	const User = lazy(() => import('./views/User'))
	const Editor = lazy(() => import('./views/MDEditor'))
	const MDViewer = lazy(() => import('./views/MDViewer'))
	const ArticleList = lazy(() => import('./views/ArticleList'))

	return (
		<div className='bg-gray-100 w-screen h-screen flex flex-col'>
			<ThemeProvider theme={theme}>
				<Suspense fallback={<Loading />}>
					<AlertMsg />
					<Routes>
						<Route path={MainRoute.HOME} element={<Layout />}>
							<Route index element={<Home />} />
							<Route path={MainRoute.LOGIN} element={<Login />} />
							<Route path='about' element={<About />} />

							{/* article */}
							<Route path={MainRoute.ARTICLE} element={<Outlet />}>
								<Route
									index
									element={
										<RequireLogin>
											<Editor />
										</RequireLogin>
									}></Route>

								<Route
									path={ArticleChildRoute.ARTICLE_ID}
									element={
										<RequireArticle>
											<MDViewer />
										</RequireArticle>
									}
								/>
							</Route>

							{/* user */}
							<Route path={MainRoute.USER} element={<Outlet />}>
								<Route
									element={
										<RequireLogin>
											<UserLayout />
										</RequireLogin>
									}>
									<Route index element={<User />} />
									<Route
										path={UserChildRoute.PERSONAL}
										element={<Personal />}
									/>
								</Route>

								<Route
									path={UserChildRoute.ARTICLE_LIST}
									element={
										<RequireLogin>
											<ArticleList />
										</RequireLogin>
									}
								/>
							</Route>
						</Route>

						{/* all redirect */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</ThemeProvider>
		</div>
	)
}
