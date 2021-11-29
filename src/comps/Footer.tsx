import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { BottomNavigationAction, Button } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import { Fragment, SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useMatch, useResolvedPath } from 'react-router-dom'
import { MainRoute } from '../router/routes'

export default function Footer() {
	const [value, setValue] = useState('')

	const navigate = useNavigate()

	const home = useResolvedPath(MainRoute.HOME)

	const uesr = useResolvedPath(MainRoute.USER)

	const article = useResolvedPath(MainRoute.ARTICLE)

	const homeMath = useMatch({ path: home.pathname, end: true })

	const uesrMath = useMatch({ path: uesr.pathname, end: true })

	const articleMath = useMatch({ path: article.pathname, end: true })

	const handleChange = (e: SyntheticEvent, newValue: string) => {
		setValue(newValue)
		navigate(newValue)
	}

	const [open, setOpen] = useState(false)

	const [closeIcon, setCloseIcon] = useState(false)

	const more = () => {
		setOpen(!open)
		setCloseIcon(!closeIcon)
	}

	useEffect(() => {
		if (homeMath) {
			return setValue(homeMath.pathname)
		} else if (uesrMath) {
			return setValue(uesrMath.pathname)
		} else if (articleMath) {
			return setValue(articleMath.pathname)
		}
	}, [articleMath, homeMath, uesrMath])

	return (
		<Fragment>
			{open && (
				<div className='fixed inset-0 z-index-998' onClick={more}>
					<div
						className={`absolute z-index-999 bottom-4.5rem w-full flex justify-center items-center triangle-bottom`}>
						<div className={`bg-light-50 rounded px-2 py-1 shadow-xl`}>
							<Button>2</Button>
							<Button onClick={() => navigate('/article')}>写文章</Button>
							<Button>3</Button>
						</div>
					</div>
				</div>
			)}

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

				{/* <BottomNavigationAction
				label='Article'
				value={MainRoute.ARTICLE}
				icon={<FavoriteIcon />}
			/> */}

				<BottomNavigationAction
					disableTouchRipple
					label='Article'
					// value={MainRoute.ARTICLE}
					onClick={more}
					icon={closeIcon ? <CloseIcon color='secondary' /> : <AddIcon />}
				/>
				{/**/}

				{/* <BottomNavigationAction
				label='Article'
				value={MainRoute.ARTICLE}
				icon={<FavoriteIcon />}
			/> */}

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
