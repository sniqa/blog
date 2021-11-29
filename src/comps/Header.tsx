import NotificationsIcon from '@mui/icons-material/Notifications'
import { AppBar, Avatar, Divider, Toolbar } from '@mui/material'
import { useSelector } from 'react-redux'
import { MainRoute } from '../router/routes'
import type { Store } from '../store/store'
import { HiddenWithDesk, HiddenWithMobil } from './Hidden'
import NavButton from './NavButton'
import Searchbar from './Searchbar'

export default function Header() {
	const { avatar, username } = useSelector((state: Store) => state.user)

	return (
		<AppBar color='inherit' elevation={0} position='sticky'>
			<Toolbar className='h-4rem flex justify-between items-center'>
				<Avatar
					sx={{ width: 32, height: 32 }}
					className={`mr-0.6rem`}
					src={avatar}>
					{username}
				</Avatar>

				<HiddenWithMobil
					className={`flex-grow box-border h-2.5rem flex items-center`}>
					<nav className={`flex items-center flex-wrap`}>
						<NavButton to={MainRoute.HOME}>Home </NavButton>
						<NavButton to={MainRoute.ARTICLE}>Article </NavButton>
						<NavButton to={MainRoute.USER}>User </NavButton>
					</nav>
				</HiddenWithMobil>

				<Searchbar to={MainRoute.SEARCH}></Searchbar>

				{/* <div className='flex justify-end items-center flex-grow'> */}
				<NotificationsIcon sx={{ color: '#666666' }}></NotificationsIcon>
				{/* <SettingsIcon></SettingsIcon> */}
				{/* </div> */}
			</Toolbar>

			<HiddenWithDesk className={`box-border h-2.5rem overflow-hidden`}>
				<Divider variant='middle'></Divider>

				<nav className={`flex items-center justify-center overflow-x-auto `}>
					<NavButton to={MainRoute.HOME}>Home </NavButton>
					<NavButton to={MainRoute.ARTICLE}>Article </NavButton>
					<NavButton to={MainRoute.USER}>User </NavButton>
				</nav>
			</HiddenWithDesk>
		</AppBar>
	)
}
