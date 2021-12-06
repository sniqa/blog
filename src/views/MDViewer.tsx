import gfm from '@bytemd/plugin-gfm'
import { Viewer } from '@bytemd/react'
import { Avatar, CardMedia, Paper, Typography } from '@mui/material'
import 'bytemd/dist/index.min.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import type { Article } from '../store/article/actionTypes'
import type { Store } from '../store/store'

const plugins = [
	gfm(),
	// Add more plugins here
]
export default function MDEditor() {
	const articleList = useSelector((state: Store) => state.article)
	const { avatar, username, articles } = useSelector(
		(state: Store) => state.user
	)

	const { id: articleId } = useParams()

	const targetArticle =
		articleList.find((article) => article._id === articleId) ||
		articles?.find((article) => article._id === articleId)

	const {
		cover,
		watch = 0,
		title,
		content,
		createTime = 0,
		account,
	} = targetArticle as Article

	return (
		<div className={`flex justify-center flex-wrap`}>
			<Paper
				className={`<sm:flex-grow md:w-2/3 2xl:w-1/2 <sm:w-full`}
				elevation={0}>
				<article className={`p-1rem overflow-wrap flex-wrap`}>
					<header className={`flex my-4`}>
						<Avatar src={avatar || ''} sizes={`large`}>
							{username || account}
						</Avatar>

						<section
							className={`ml-1rem flex-grow flex flex-col justify-between`}>
							<Typography>{username || account}</Typography>

							<div className='flex items-center text-sm'>
								<time className={`mr-0.8rem`}>
									{new Date(createTime).toLocaleDateString()}
								</time>
								<Typography>{`watch ${watch}`}</Typography>
							</div>
						</section>

						{/* <section>
							<Button variant='outlined'>Follow</Button>
						</section> */}
					</header>

					<section>
						{/* 图片展示区 */}
						{cover && <CardMedia component='img' image={cover}></CardMedia>}
					</section>

					<section className={`my-1rem`}>
						<Typography
							component={`h1`}
							sx={{ fontSize: '2rem', fontWeight: '700' }}>
							{title || ''}
						</Typography>
					</section>

					<section className={`flex flex-wrap overflow-hidden`}>
						<Viewer value={content || ''} plugins={plugins} />
					</section>
				</article>
			</Paper>
		</div>
	)
}
