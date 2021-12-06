import {
	Avatar,
	Button,
	Dialog,
	FormControlLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material'
import { ChangeEvent, Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifyUserInfo } from '../apis/user'
import SettingPaper from '../comps/SettingPaper'
import Upload from '../comps/Upload'
import { Gender_en, Gender_enToGender_zh } from '../constant/user'
import type { Store } from '../store/store'
import { modifyUserInfoAction } from '../store/user/actions'

const _username = '昵称'
const _gender = '性别'
const _avatar = '头像'
const _signature = '签名'
const _confirm = '确认'
const _cancel = '取消'
const _title = 'Title'

// enum PersonalPageConst {
// 	AVATAR = '头像',
// 	USERNAME = '昵称',
// 	GENDER = '性别',
// 	SIGNATURE = '签名',
// 	CONFIRM = '确认',
// }

enum DialogState {
	SHOW_AVATAR_BOX = 0,
	SHOW_USERNAME_BOX = 1,
	SHOW_GENDER_BOX = 2,
	SHOW_SIGNATURE_BOX = 3,
}

enum DialogTitle {
	AVATAR_BOX = '上传头像',
	USERNAME_BOX = '昵称',
	GENDER_BOX = '性别',
	SIGNATURE_BOX = '签名',
}

interface PersonInfo {
	username: string
	avatar: string
	gender: Gender_en
	signature: string
}

const getDialogTitle = (type: DialogState) => {
	switch (type) {
		case DialogState.SHOW_AVATAR_BOX:
			return DialogTitle.AVATAR_BOX
		case DialogState.SHOW_USERNAME_BOX:
			return DialogTitle.USERNAME_BOX
		case DialogState.SHOW_GENDER_BOX:
			return DialogTitle.GENDER_BOX
		case DialogState.SHOW_SIGNATURE_BOX:
			return DialogTitle.SIGNATURE_BOX
	}
}

export default function Personal() {
	const {
		token,
		avatar = '',
		username = '',
		gender = Gender_en.MALE,
		signature = '',
	} = useSelector((store: Store) => store.user)

	const [open, setOpen] = useState(false)

	const [personInfo, setPersonInfo] = useState<PersonInfo>({
		avatar,
		username,
		gender,
		signature,
	})

	const [dialogType, setDialogType] = useState(DialogState.SHOW_USERNAME_BOX)

	const dispatch = useDispatch()

	const openDialog = (type: DialogState) => {
		setDialogType(type)
		setOpen(true)
	}

	const closeDialogAndDispatch = () => {
		modifyUserInfo(token, personInfo, () => {
			dispatch(modifyUserInfoAction(personInfo))
		})
		setOpen(false)
	}

	return (
		<div className={`h-full w-full`}>
			<div className='flex flex-col items-center flex-grow h-full'>
				<SettingPaper
					left={_avatar}
					onClick={() => openDialog(DialogState.SHOW_AVATAR_BOX)}>
					<Avatar src={avatar}>{username}</Avatar>
				</SettingPaper>

				<SettingPaper
					left={_username}
					onClick={() => openDialog(DialogState.SHOW_USERNAME_BOX)}>
					{username}
				</SettingPaper>

				<SettingPaper
					left={_gender}
					onClick={() => openDialog(DialogState.SHOW_GENDER_BOX)}>
					{Gender_enToGender_zh(gender)}
				</SettingPaper>

				<SettingPaper
					left={_signature}
					onClick={() => openDialog(DialogState.SHOW_SIGNATURE_BOX)}>
					{signature}
				</SettingPaper>
			</div>

			<Dialog open={open}>
				<PersonalEditBox
					title={getDialogTitle(dialogType)}
					onConfirm={closeDialogAndDispatch}
					onCancel={() => setOpen(false)}>
					{(() => {
						switch (dialogType) {
							case DialogState.SHOW_AVATAR_BOX: {
								return (
									<Upload
										bgImage={personInfo.avatar}
										bgColor={`bg-gray-100`}
										onUploadReady={(fileUrl) =>
											setPersonInfo({ ...personInfo, avatar: fileUrl })
										}
									/>
								)
							}
							case DialogState.SHOW_USERNAME_BOX: {
								return (
									<TextField
										size={`small`}
										sx={{ my: '1rem' }}
										defaultValue={personInfo.username}
										onChange={(e) =>
											setPersonInfo({
												...personInfo,
												username: e.target.value,
											})
										}
									/>
								)
							}
							case DialogState.SHOW_GENDER_BOX: {
								return (
									<GenderSelector
										defaultValue={personInfo.gender}
										onChange={(e) =>
											setPersonInfo({
												...personInfo,
												gender: e.target.value as Gender_en,
											})
										}
									/>
								)
							}
							case DialogState.SHOW_SIGNATURE_BOX: {
								return (
									<TextField
										size={`small`}
										sx={{ my: '1rem' }}
										defaultValue={personInfo.signature}
										onChange={(e) =>
											setPersonInfo({
												...personInfo,
												signature: e.target.value,
											})
										}
									/>
								)
							}
							default: {
								return null
							}
						}
					})()}
				</PersonalEditBox>
			</Dialog>
		</div>
	)
}

function GenderSelector({
	onChange,
	defaultValue,
}: {
	onChange: (e: ChangeEvent<HTMLInputElement>) => any
	defaultValue?: Gender_en
}) {
	return (
		<RadioGroup
			aria-label='gender'
			value={defaultValue}
			name='radio-buttons-group'
			onChange={onChange}>
			<FormControlLabel
				value={Gender_en.FEMALE}
				control={<Radio />}
				label={Gender_enToGender_zh(Gender_en.FEMALE)}
			/>
			<FormControlLabel
				value={Gender_en.MALE}
				control={<Radio />}
				label={Gender_enToGender_zh(Gender_en.MALE)}
			/>
		</RadioGroup>
	)
}

interface PersonalEditBoxProps {
	children?: JSX.Element | null
	title?: string
	onConfirm?: () => void
	onCancel?: () => void
}
function PersonalEditBox({
	children,
	title = _title,
	onConfirm,
	onCancel,
}: PersonalEditBoxProps) {
	return (
		<Fragment>
			<div className='flex flex-col px-4 pt-4 min-w-16rem'>
				<Typography color={`primary`} sx={{ mb: '0.5rem' }}>
					{title}
				</Typography>

				{children}
			</div>

			<div className='flex justify-end mt-2'>
				<Button onClick={onCancel}>{_cancel}</Button>
				<Button onClick={onConfirm}>{_confirm}</Button>
			</div>
		</Fragment>
	)
}
