import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import type { Store } from '../store/store'

export default function User() {
	const { isLogin } = useSelector((state: Store) => state.user)

	const navigate = useNavigate()
	useEffect(() => {
		!isLogin && navigate('/login')
	})

	return <div>this is User page</div>
}
