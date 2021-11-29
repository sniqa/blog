import { Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { emitter, MittEventName } from '../apis/mitt'

let timer: any = 0

export default function AlertMsg() {
	const [open, setOpen] = useState(false)
	const [msg, setMsg] = useState('')

	useEffect(() => {
		emitter.on(MittEventName.ALERT, (msg) => {
			setOpen(true)
			setMsg(msg)
		})
		clearTimeout(timer)
		timer = setTimeout(() => {
			setOpen(false)
		}, 3000)
	})

	return (
		<aside id='alert'>
			{open && (
				<div className='relative'>
					<Alert
						severity='info'
						variant='filled'
						className={`rounded <sm:mx-1rem sm:ml-1/4 sm:w-1/2 alert-self`}
						sx={{
							position: 'absolute',
							zIndex: 99,
							top: '8rem',
						}}>
						{msg}
					</Alert>
				</div>
			)}
		</aside>
	)
}
