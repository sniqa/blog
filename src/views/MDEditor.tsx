import gfm from '@bytemd/plugin-gfm'
import { Editor } from '@bytemd/react'
import DraftsIcon from '@mui/icons-material/Drafts'
import PublishIcon from '@mui/icons-material/Publish'
import { Button, InputBase, Paper, Typography } from '@mui/material'
import 'bytemd/dist/index.min.css'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { createArticle } from '../apis/article'
import { emitter, MittEventName } from '../apis/mitt'
import { HiddenWithDesk, HiddenWithMobil } from '../comps/Hidden'
import { MainRoute } from '../router/routes'
import { addArticleAction } from '../store/article/actions'
import type { Store } from '../store/store'

const plugins = [
	gfm(),
	// Add more plugins here
]
export default function MDEditor() {
	const [content, setContent] = useState('')
	const [title, setTitle] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { account, isLogin, token } = useSelector((state: Store) => state.user)

	useEffect(() => {
		!isLogin && navigate(MainRoute.LOGIN)
	})

	const onPublish = () => {
		const article = { token, author: account, title, content }
		createArticle(article, (data) => {
			const { token, ...res } = article
			dispatch(addArticleAction({ ...res, ...data.data }))
			console.log({ ...res, ...data.data })

			emitter.emit(MittEventName.ALERT, `文章发表成功`)
		})
	}

	const onSaveToDraft = () => {
		console.log('title ', title, 'content: ', content)
	}

	return (
		<Fragment>
			<div className='h-3rem box-border flex items-center mb-0.5rem'>
				<EditorTitle
					setTitle={setTitle}
					publish={onPublish}
					saveToDraft={onSaveToDraft}
				/>
			</div>

			<Editor
				value={content}
				plugins={plugins}
				onChange={(v) => {
					setContent(v)
				}}
			/>
		</Fragment>
	)
}

interface EditorTitleProps {
	setTitle: (val: string) => void
	publish: () => void
	saveToDraft: () => void
}

function EditorTitle({ setTitle, publish, saveToDraft }: EditorTitleProps) {
	return (
		<Paper elevation={0} className={'flex justify-between flex-grow h-3rem'}>
			<InputBase
				onChange={(e) => setTitle(e.target.value)}
				sx={{ flexGrow: 1, pl: '0.8rem' }}
				placeholder={`请输入文章标题...`}></InputBase>

			<HiddenWithDesk
				className={`flex items-center justify-between w-3.2rem mx-0.6rem`}>
				<DraftsIcon
					fontSize={`small`}
					color='primary'
					onClick={saveToDraft}
					// sx={{ mx: '0.6rem' }}
				/>
				<PublishIcon fontSize={`small`} color='primary' onClick={publish} />
			</HiddenWithDesk>

			<HiddenWithMobil className={`flex items-center`}>
				<Button disableElevation onClick={saveToDraft}>
					<Typography>存为草稿</Typography>
				</Button>

				<Button disableElevation onClick={publish}>
					<Typography>发布</Typography>
				</Button>
			</HiddenWithMobil>
		</Paper>
	)
}
