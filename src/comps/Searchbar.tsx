import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface Props {
	to: string
}

export default function Searchbar({ to }: Props) {
	const navigate = useNavigate()
	const go = () => navigate(to)

	return (
		<Paper
			elevation={0}
			className={`flex items-center mx-1rem`}
			sx={{ backgroundColor: '#e1f5fe' }}>
			<SearchIcon
				className={`mx-0.3rem`}
				sx={{ color: '#666666' }}></SearchIcon>
			<InputBase onFocus={go} placeholder={`Search...`}></InputBase>
		</Paper>
	)
}
