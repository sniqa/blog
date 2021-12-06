import { Avatar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import SettingPaper from '../comps/SettingPaper'
import { UserChildRoute } from '../router/routes'
import { Store } from '../store'
export default function User() {
	const { avatar, username, signature, account } = useSelector(
		(state: Store) => state.user
	)

	const navigate = useNavigate()

	return (
		<div className='flex items-center flex-col flex-grow w-full'>
			<SettingPaper
				onClick={() => navigate(UserChildRoute.PERSONAL)}
				left={
					<div className={`flex my-4 mb-2`}>
						<Avatar src={avatar} sx={{ width: 56, height: 56 }}>
							{username || account}
						</Avatar>

						<div className='ml-4 flex flex-col justify-between'>
							<Typography
								component={`h3`}
								sx={{ fontSize: '1.25rem', fontWeight: '600' }}>
								{username || account}
							</Typography>
							<Typography fontSize='samll'>{signature || 'hello'}</Typography>
						</div>
					</div>
				}
			/>

			<SettingPaper
				left={`文章列表`}
				onClick={() => navigate(UserChildRoute.ARTICLE_LIST)}></SettingPaper>
		</div>
	)
}
