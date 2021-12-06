import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import LockIcon from '@mui/icons-material/Lock'
import PersonSharpIcon from '@mui/icons-material/PersonSharp'
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Paper, Typography } from '@mui/material'
import { ChangeEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { emitter, MittEventName } from '../apis/mitt'
import { createUser, login } from '../apis/user'
import { MainRoute } from '../router/routes'
import { loginAction } from '../store/user/actions'

export default function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const [verifyPassword, setVerifyPassword] = useState('')
	const [isCreate, setIsCreate] = useState(false)

	const btnClick = async () => {
		setLoading(true)

		if (isCreate) {
			if (verifyPassword === password) {
				createUser(
					{ account, password },
					(res) => {
						const { token = '' } = res

						dispatch(loginAction({ token, account }))

						navigate(MainRoute.USER)
					},
					() => setLoading(false)
				)
			} else {
				emitter.emit(MittEventName.ALERT, '两次密码不一致')
				setLoading(false)
			}
		} else {
			login(
				{ account, password },
				(res) => {
					const { token, data } = res

					dispatch(loginAction({ token, ...data }))

					navigate(-1)
				},
				() => setLoading(false)
			)
		}
	}

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<Paper
				className={`p-8 flex flex-col <sm:flex-grow sm:w-20rem <sm:max-w-24rem`}
				elevation={0}>
				<Typography
					color='primary'
					component={'h3'}
					sx={{ fontWeight: '700', fontSize: '1.25rem' }}>
					{isCreate ? 'Create' : 'Login'}
				</Typography>

				<Input
					label='Username'
					color='text-blue-500'
					onChange={(e) => setAccount(e.target.value)}
					startIcon={<PersonSharpIcon fontSize='small' />}></Input>

				<Input
					label='Password'
					type='password'
					color='text-blue-500'
					onChange={(e) => setPassword(e.target.value)}
					startIcon={<LockIcon fontSize='small' />}></Input>

				{isCreate && (
					<Input
						label='Password'
						type='password'
						color='text-blue-500'
						onChange={(e) => setVerifyPassword(e.target.value)}
						startIcon={<LockIcon fontSize='small' />}></Input>
				)}

				<div className={`bg-blue-400 rounded mt-1rem text-light-50`}>
					<LoadingButton
						loading={loading}
						disableElevation
						disableFocusRipple
						fullWidth
						onClick={btnClick}
						sx={{ color: 'inherit' }}>
						<Typography>{isCreate ? 'CREATE' : 'LOGIN'}</Typography>
					</LoadingButton>
				</div>

				<div className='text-sm flex mt-1rem'>
					<Button size='small' onClick={() => setIsCreate(!isCreate)}>
						{/* <Typography> */}
						{`or ${isCreate ? `sign in` : `create  account`}`.toLowerCase()}
						{/* </Typography> */}
					</Button>
				</div>
			</Paper>
		</div>
	)
}

interface InputProps {
	label?: string
	type?: string
	placeholder?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	color?: any
	startIcon: ReactJSXElement
}

function Input(props: InputProps) {
	const {
		label,
		type = 'text',
		placeholder = '',
		color = 'primary',
		onChange,
		startIcon,
	} = props
	return (
		<div className={`${color} my-0.5rem`}>
			{label && <label className={`text-inherit my-2`}>{label}</label>}

			<div
				className={`px-0.5rem py-0.4rem flex justify-center items-center bg-gray-100 rounded`}>
				{startIcon}
				<input
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					className={`outline-none ml-0.3rem flex-grow text-inherit bg-transparent placeholder-inherit`}></input>
			</div>
		</div>
	)
}
