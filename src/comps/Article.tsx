import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { CardMedia, Divider, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainRoute } from '../router/routes'
import type { Article as ArticleProps } from '../store/article/actionTypes'

interface Props {
	article: ArticleProps
}

export default function Article(props: Props) {
	const navigate = useNavigate()

	const {
		author = 'SNiQA',
		id,
		content = 'CONTENT光十色没空没回信开什么会没什么好MS没下课还没下课没看什么',
		title = '我是傻瓜五光十色没空没回信开什么会没什么好MS没下课还没下课没看什么 ',
		createTime = '',
		// updateTime = '',
		like = 0,
		watch = 0,
		comment = 0,
		img = 'https://www.kanmn.cn/wp-content/uploads/2021/11/20211113_618fc3d78e754.jpg',
		alt,
	} = props.article
	return (
		<Paper
			elevation={0}
			className={'px-0.8rem py-0.5rem mb-0.5rem flex flex-col'}
			component='article'
			onClick={() => navigate(`${MainRoute.ARTICLE}/${id}`)}>
			<header className={`flex items-center text-gray-500 text-sm`}>
				{/* author and creation date */}

				<Typography sx={{ fontSize: 'inherit', fontWeight: '500' }}>
					{author}
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

				<Typography sx={{ fontSize: 'inherit' }}>{createTime}</Typography>
			</header>

			{/* article content and img */}
			<main className={`flex justify-between`}>
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
						{content}
					</Typography>
				</section>

				<figure className={``}>
					{img && (
						<CardMedia
							component='img'
							sx={{ height: '80px', width: '120px', flexGrow: 0, ml: '0.6rem' }}
							image={img}
							alt={alt}></CardMedia>
					)}
				</figure>
			</main>

			{/* counter */}
			<footer className={`flex text-sm`}>
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
