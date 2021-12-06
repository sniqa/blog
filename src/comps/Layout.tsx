import { Fragment } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import { HiddenWithDesk } from './Hidden'

export default function Layout() {
	return (
		<Fragment>
			<Header />

			<main
				className={`box-border px-1rem pt-0.5rem content-main overflow-y-auto`}>
				<Outlet />
			</main>

			<HiddenWithDesk className={`fixed inset-x-0 bottom-0`} tag='footer'>
				<Footer />
			</HiddenWithDesk>
		</Fragment>
	)
}
