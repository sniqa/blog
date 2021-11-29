import { createTheme, ThemeProvider } from '@mui/material'
import { lazy, Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './comps/Layout'
import { MainRoute } from './router/routes'
import About from './views/About'
import AlertMsg from './views/Alert'
import Home from './views/Home'
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
	// const User = lazy(() => import('./views/User'))
	// const Article = lazy(() => import('./views/Article'))
	const Editor = lazy(() => import('./views/MDEditor'))

	return (
		<div className='bg-gray-100 w-screen h-screen'>
			<ThemeProvider theme={theme}>
				<Suspense fallback={<h1>Loading</h1>}>
					<AlertMsg />
					<Routes>
						<Route path={MainRoute.HOME} element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='login' element={<Login />} />
							<Route path='about' element={<About />} />
							<Route path='personal' element={<Personal />} />

							<Route path={MainRoute.ARTICLE} element={<Outlet />}>
								<Route index element={<Editor />} />
								<Route path=':id' element={<Editor />} />
							</Route>

							<Route path={MainRoute.USER} element={<Outlet />}>
								{/* <Route index element={<User />} /> */}
								<Route index element={<Personal />} />
							</Route>
						</Route>

						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</ThemeProvider>
		</div>
	)
}
