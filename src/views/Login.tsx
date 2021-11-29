import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import LockIcon from '@mui/icons-material/Lock'
import PersonSharpIcon from '@mui/icons-material/PersonSharp'
import { Button, Paper, Typography } from '@mui/material'
import { ChangeEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../apis/user'
import { loginAction } from '../store/user/actions'

export default function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [account, setAccount] = useState('')
	const [password, setPassword] = useState('')
	const [verifyPassword, setVerifyPassword] = useState('')
	const [isCreate, setIsCreate] = useState(false)

	const btnClick = async () => {
		if (isCreate) {
			if (verifyPassword === password) {
			}

			// const res = await createUser({})
		} else {
			login({ account, password }, (res) => {
				const { token, data } = res

				dispatch(loginAction({ token, ...data }))

				navigate(-1)
			})
		}
	}

	return (
		<Paper className={`mt-10rem p-8 flex flex-col`} elevation={0}>
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
				color='text-blue-500'
				onChange={(e) => setPassword(e.target.value)}
				startIcon={<LockIcon fontSize='small' />}></Input>

			{isCreate && (
				<Input
					label='Password'
					color='text-blue-500'
					onChange={(e) => setVerifyPassword(e.target.value)}
					startIcon={<LockIcon fontSize='small' />}></Input>
			)}

			<div className={`bg-blue-400 rounded mt-1rem text-light-50`}>
				<Button
					disableElevation
					disableFocusRipple
					fullWidth
					onClick={btnClick}
					sx={{ color: 'inherit' }}>
					<Typography>{isCreate ? 'CREATE' : 'LOGIN'}</Typography>
				</Button>
			</div>

			<div className='text-sm flex mt-1rem'>
				<Button size='small' onClick={() => setIsCreate(!isCreate)}>
					{/* <Typography> */}
					{`or ${isCreate ? `sign in` : `create  account`}`.toLowerCase()}
					{/* </Typography> */}
				</Button>
			</div>
		</Paper>
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
