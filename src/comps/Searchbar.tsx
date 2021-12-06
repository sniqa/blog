import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Paper } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

interface Props {
	to: string
}

export default function Searchbar({ to }: Props) {
	// const navigate = useNavigate()
	// const go = () => navigate(to)

	return (
		<Paper
			elevation={0}
			className={`flex items-center mx-1rem`}
			sx={{ backgroundColor: '#F3F4F6' }}>
			<SearchIcon
				className={`mx-0.3rem`}
				sx={{ color: '#666666' }}></SearchIcon>
			<InputBase placeholder={`Search...`}></InputBase>
		</Paper>
	)
}
