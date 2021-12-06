import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { BottomNavigationAction } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import { Fragment, SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { MainRoute } from '../router/routes'

export default function Footer() {
	const [value, setValue] = useState('')

	const navigate = useNavigate()

	const location = useLocation()

	const handleChange = (e: SyntheticEvent, newValue: string) => {
		setValue(newValue)
		navigate(newValue)
	}

	useEffect(() => {
		setValue(location.pathname)
	}, [location.pathname])

	return (
		<Fragment>
			{/* <div
				className={`fixed mb-3.5rem inset-0 z-index-998 ${
					open ? '' : 'hidden'
				}`.trim()}
				onClick={(e) => more(e)}>
				<div
					className={`absolute z-index-999 bottom-1rem w-full flex justify-center items-center triangle-bottom`}>
					<div className={`bg-light-50 rounded px-2 py-1 shadow-xl`}>
						<Button>2</Button>
						<Button onClick={onClick}>写文章</Button>
						<Button>3</Button>
					</div>
				</div>
			</div> */}

			<BottomNavigation
				onChange={handleChange}
				value={value}
				sx={{ boxShadow: '0px -1px 1px  #eee' }}>
				<BottomNavigationAction
					disableTouchRipple
					label='Home'
					value={MainRoute.HOME}
					icon={<HomeIcon />}
				/>

				<BottomNavigationAction
					disableTouchRipple
					label='Article'
					value={MainRoute.ARTICLE}
					icon={<AddIcon />}
				/>

				<BottomNavigationAction
					disableTouchRipple
					label='User'
					value={MainRoute.USER}
					icon={<PersonIcon />}
				/>
			</BottomNavigation>
		</Fragment>
	)
}
