import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Favorite } from './pages/Favorite.tsx'
import { Home } from './pages/Home.tsx'
import { Login } from './pages/Login.tsx'
import { Manga } from './pages/Manga.tsx'
import { Profile } from './pages/Profile.tsx'
import { Register } from './pages/Register.tsx'
import { useManga, useUser } from './store.js'

const App = () => {
	const navigate = useNavigate()
	const getManga = useManga(state => state.getManga)
	const getUser = useUser(state => state.getUser)
	const isAuth = useUser(state => state.isAuth)

	useEffect(() => {
		getUser()
		getManga()
	}, [])

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/favorites" element={<Favorite />} />
				<Route exact path="/profile" element={<Profile />}></Route>
				<Route exact path="/manga/:id" element={<Manga />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/*" element={<Navigate replace to={'/'} />} />
			</Routes>
		</>
	)
}

export { App }
