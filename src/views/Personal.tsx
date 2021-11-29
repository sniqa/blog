import { Avatar, Button, Paper, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SettingPaper from '../comps/SettingPaper'
import { MainRoute } from '../router/routes'
import type { Store } from '../store/store'
import { logoutAction } from '../store/user/actions'

export default function Personal() {
	const { isLogin, avatar, username, gender, signature } = useSelector(
		(store: Store) => store.user
	)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	useEffect(() => {
		!isLogin && navigate(MainRoute.LOGIN)
	})

	return (
		<div className={`h-full flex flex-col justify-between`}>
			<div className=''>
				<SettingPaper name='头像'>
					<Avatar src={avatar}>{username}</Avatar>
				</SettingPaper>

				<SettingPaper name='昵称'>{username}</SettingPaper>

				<SettingPaper name='性别'>{gender ? '男' : '女'}</SettingPaper>

				<SettingPaper name='签名'>{signature}</SettingPaper>
			</div>

			<div className='mb-0.5rem'>
				<Paper elevation={0}>
					<Button fullWidth onClick={() => dispatch(logoutAction())}>
						<Typography>注销</Typography>
					</Button>
				</Paper>
			</div>
		</div>
	)
}
