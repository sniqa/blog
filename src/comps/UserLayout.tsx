import { Button, Paper, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { logoutAction } from '../store/user/actions'

export default function UserLayout() {
	const dispatch = useDispatch()

	return (
		<div className={`h-full w-full`}>
			<div className='flex flex-col justify-between items-center flex-grow h-full'>
				<Outlet></Outlet>

				<div className='mb-0.5rem <sm:w-full sm:w-3/5 md:w-3/5 xl:w-3/5 2xl:w-1/2 cursor-pointer'>
					<Paper elevation={0}>
						<Button fullWidth onClick={() => dispatch(logoutAction())}>
							<Typography>注销</Typography>
						</Button>
					</Paper>
				</div>
			</div>
		</div>
	)
}
