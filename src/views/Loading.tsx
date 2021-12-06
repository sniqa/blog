import { Skeleton } from '@mui/material'
import { Fragment } from 'react'

export default function Loading() {
	return (
		<Fragment>
			<div
				className={`p-1rem h-screen flex flex-col justify-between bg-light-50`}>
				<section className='mb-1rem w-full flex items-center'>
					<Skeleton variant='circular' width={40} height={40} />
					<div className='flex-grow flex flex-col ml-1rem'>
						<Skeleton variant='text' animation='wave' className={`w-1/2`} />
						<Skeleton variant='text' animation='wave' />
					</div>
				</section>

				<section className={`flex-grow flex flex-col`}>
					<Skeleton variant='rectangular' className={`mb-1rem flex-grow`} />
					<Skeleton variant='text' className={`mb-1rem w-1/2`} />
					<Skeleton variant='rectangular' className={`mb-1rem`} />
					<Skeleton variant='rectangular' className={`mb-1rem`} />
					<Skeleton variant='text' className={`mb-1rem w-1/2`} />
					<Skeleton variant='rectangular' className={`mb-1rem flex-grow`} />
					<Skeleton variant='rectangular' className={`mb-1rem`} />
				</section>

				<section>
					{/* <Skeleton variant='circular' width={40} height={40} /> */}
					<Skeleton variant='text' animation='wave' className={`rounded`} />
					<Skeleton variant='text' className={`w-1/2`} />
				</section>
			</div>
		</Fragment>
	)
}
