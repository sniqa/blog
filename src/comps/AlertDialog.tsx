import {
	Button,
	Dialog,
	Slide,
	styled,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Dispatch, forwardRef, ReactElement, Ref, SetStateAction } from 'react'
import Upload from './Upload'

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'green',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#1976d2',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'green',
		},
	},
})

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement
	},
	ref: Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />
})

interface FullScreenDialogProps {
	openState: [boolean, Dispatch<SetStateAction<boolean>>]
	setCategory: Dispatch<SetStateAction<string>>
	setCover: Dispatch<SetStateAction<string>>
	setSummary: Dispatch<SetStateAction<string>>
	saveCallback: () => void
}

export default function FullScreenDialog(props: FullScreenDialogProps) {
	const {
		openState: [open, setOpen],
		setCategory,
		setCover,
		setSummary,
		saveCallback,
	} = props

	return (
		<Dialog
			fullWidth
			open={open}
			color='secondary'
			onClose={() => setOpen(false)}
			TransitionComponent={Transition}>
			<div className={`w-full`}>
				<Toolbar>
					<Typography sx={{ flex: 1 }} variant='h6' component='div'>
						Publish Article
					</Typography>
					<Button
						autoFocus
						color='primary'
						variant='outlined'
						onClick={() => {
							setOpen(false)
							saveCallback()
						}}>
						save
					</Button>
				</Toolbar>

				{/* 文章分类 */}
				<div className='flex flex-col '>
					<div className='flex flex-col mx-1rem bg-gray-100 p-2'>
						<Typography
							color='primary'
							sx={{ my: '0.5rem' }}
							component={'label'}>
							分类：
						</Typography>
						<CssTextField
							size='small'
							onChange={(e) => setCategory(e.target.value)}></CssTextField>
					</div>

					{/* 封面图片 */}
					<div className='flex flex-col m-1rem bg-gray-100 p-2'>
						<Typography
							color='primary'
							sx={{ my: '0.5rem' }}
							component={'label'}>
							文章封面：
						</Typography>

						<Upload
							bgColor={`bg-gray-600`}
							onUploadReady={(fileUrl) => setCover(fileUrl)}></Upload>
					</div>

					{/* 文章简介 */}
					<div className='flex flex-col mx-1rem mb-1rem bg-gray-100 p-2'>
						<Typography
							color='primary'
							sx={{ my: '0.5rem' }}
							component={'label'}>
							文章简介:
						</Typography>
						<CssTextField
							color='primary'
							onChange={(e) => setSummary(e.target.value)}
							placeholder={`输入文章简介，最多50个字`}></CssTextField>
					</div>
				</div>
			</div>
		</Dialog>
	)
}
