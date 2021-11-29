import { Button } from '@mui/material'
import { useMatch, useNavigate } from 'react-router-dom'

interface NavButtonProps {
	to: string
	children?: any
}

export default function NavButton(props: NavButtonProps) {
	const { to, children } = props
	const navigate = useNavigate()
	const math = useMatch(to)

	return (
		<Button
			onClick={() => navigate(to)}
			color={`${math ? 'primary' : 'secondary'}`}>
			{children}
		</Button>
	)
}
