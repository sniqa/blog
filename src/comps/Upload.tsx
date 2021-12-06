import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import { ChangeEvent, useState } from 'react'
import { emitter, MittEventName } from '../apis/mitt'
import { upload } from '../apis/upload'

interface UploadProps {
	onUploadReady: (fileUrl: string) => void
	color?: string
	bgColor?: string
	bgImage?: string
}

export default function Upload(props: UploadProps) {
	const {
		onUploadReady,
		color = 'primary',
		bgColor = 'bg-light-50',
		bgImage = '',
	} = props
	const [bgImg, setBgImg] = useState<string>(bgImage)

	const onFileReady = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files

		if (!files) {
			return emitter.emit(MittEventName.ALERT, '上传失败')
		}

		const file = files[0]

		const fileReader = new FileReader()

		fileReader.readAsDataURL(file)
		fileReader.onload = (evt) => {
			setBgImg(evt.target?.result as string)
		}

		upload(file, (res) => {
			const { fileUrl } = res.data

			onUploadReady(fileUrl)
		})
	}

	return (
		<div
			className={`overflow-hidden m-auto relative h-6rem w-10rem rounded z-1 ${bgColor} ${color}`.trim()}>
			<img
				src={bgImg || ''}
				alt=''
				className={`absolute z-2 w-full h-full opacity-90`}
			/>
			<input
				type='file'
				className='w-full h-5rem h-8rem absolute -top-2rem bg-transparent z-5'
				onChange={onFileReady}></input>
			<div className='absolute w-3rem h-3rem top-1.5rem left-3.5rem flex justify-center items-center z-3'>
				<AddPhotoAlternateOutlinedIcon color='primary' sx={{ zIndex: 4 }} />
			</div>
		</div>
	)
}
