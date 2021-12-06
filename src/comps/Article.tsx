import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { CardMedia, Divider, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainRoute } from '../router/routes'
import { Store } from '../store'
import type { Article as ArticleProps } from '../store/article/actionTypes'

export default function Article(props: ArticleProps) {
	const navigate = useNavigate()

	const { account: loginUser } = useSelector((state: Store) => state.user)

	const {
		account = '',
		_id,
		title = '',
		createTime = '',
		// updateTime = '',
		like = 0,
		watch = 0,
		comment = 0,
		cover = '',
		summary = '',
	} = props

	const isOwnArticle = account === loginUser

	return (
		<Paper
			elevation={0}
			className={
				'px-0.8rem py-0.5rem mb-0.5rem flex flex-col <md:flex-grow  md:w-1/2 cursor-pointer'
			}
			component='article'>
			<header className={`flex items-center text-gray-500 text-sm`}>
				{/* account and creation date */}

				<Typography sx={{ fontSize: 'inherit', fontWeight: '500' }}>
					{account}
				</Typography>

				<Divider
					orientation='vertical'
					variant='middle'
					flexItem
					sx={{
						mx: '0.5rem',
						mt: '0.5rem',
						height: '1rem',
					}}></Divider>

				<Typography sx={{ fontSize: 'inherit' }}>
					{new Date(createTime).toLocaleDateString()}
				</Typography>
			</header>

			{/* article content and img */}
			<main
				className={`flex justify-between`}
				onClick={() => navigate(`${MainRoute.ARTICLE}/${_id}`)}>
				<section className={`text-gray-500`}>
					<Typography
						component={`h3`}
						className={`text-dark-900 one-line-ellipsis`}
						sx={{ fontSize: '1rem', fontWeight: '700' }}>
						{title}
					</Typography>

					<Typography
						sx={{ fontSize: '0.875rem', mt: '0.5rem' }}
						className={`two-line-ellipsis`}>
						{summary}
					</Typography>
				</section>

				<figure className={``}>
					{cover && (
						<CardMedia
							component='img'
							sx={{ height: '80px', width: '120px', flexGrow: 0, ml: '0.6rem' }}
							image={cover}
							alt={''}></CardMedia>
					)}
				</figure>
			</main>

			{/* counter */}
			<footer className={`flex justify-between text-sm`}>
				<section className='flex'>
					<Counter
						count={watch}
						icon={<RemoveRedEyeIcon fontSize='inherit' />}
						clickedIcon={<RemoveRedEyeOutlinedIcon fontSize='inherit' />}
					/>
					<Counter
						count={like}
						icon={<ThumbUpIcon fontSize='inherit' />}
						clickedIcon={<ThumbUpAltOutlinedIcon fontSize='inherit' />}
					/>
					<Counter
						count={comment}
						icon={<ModeCommentIcon fontSize='inherit' />}
						clickedIcon={<ModeCommentOutlinedIcon fontSize='inherit' />}
					/>
				</section>

				{isOwnArticle && (
					<section>
						<MoreVertIcon sx={{ color: '#aaa' }} />
					</section>
				)}
			</footer>
		</Paper>
	)
}

interface CounterProps {
	icon: ReactJSXElement
	clickedIcon: ReactJSXElement
	count: number
}

// icon and counter
function Counter({ icon, clickedIcon, count }: CounterProps) {
	const [isClicked, setIsClicked] = useState(false)
	const [curCount, setCurCount] = useState(count)
	const iconOnClick = () => {
		if (curCount > count) {
			setIsClicked(false)
			setCurCount(curCount - 1)
		} else {
			setIsClicked(true)
			setCurCount(curCount + 1)
		}
	}

	return (
		<div
			className={`flex items-center text-sm ${
				isClicked ? 'text-blue-400' : 'text-gray-400'
			}`}
			onClick={iconOnClick}>
			{isClicked ? icon : clickedIcon}
			<Typography sx={{ ml: '0.3rem', mr: '1rem', fontSize: 'inherit' }}>
				{curCount > 1000 ? numToFinancialNotation(curCount) : curCount}
			</Typography>
		</div>
	)
}

// Digital-to-financial notation
const numToFinancialNotation = (num: number): string => {
	const k = 1_000
	const m = 1_000_000
	const b = 1_000_000_000

	if (num >= k && num < m) {
		const res = Math.floor(num / (k / 10)) / 10
		return `${res}k`
	}
	if (num >= m && num < b) {
		const res = Math.floor(num / (m / 10)) / 10
		return `${res}m`
	}
	if (num >= b) {
		const res = Math.floor(num / (m / 10)) / 10
		return `${res}b`
	}
	return num.toString()
}
