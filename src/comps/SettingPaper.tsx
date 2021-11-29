import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Paper, Typography } from '@mui/material'

interface Props {
	name?: string
	divider?: boolean
	children?: ReactJSXElement | string
}

export default function SettingPaper(props: Props) {
	const { name = '', children = '' } = props
	return (
		<div
			className={`mb-0.5rem <sm:w-full sm:w-3/5 md:w-3/5 xl:w-3/5 2xl:w-1/2 cursor-pointer`}>
			<Paper
				elevation={0}
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					pl: '1rem',
					pr: '0.6rem',
					py: '10px',
				}}>
				<Typography>{name}</Typography>
				<div className='flex-grow flex justify-end'>{children}</div>
				<KeyboardArrowRightIcon sx={{ color: '#86909C' }} />
			</Paper>
		</div>
	)
}
