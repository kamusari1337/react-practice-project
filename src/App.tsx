import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Favorite } from './pages/Favorite.tsx'
import { Home } from './pages/Home.tsx'
import { Login } from './pages/Login.tsx'
import { Manga } from './pages/Manga.tsx'
import { Profile } from './pages/Profile.tsx'
import { Register } from './pages/Register.tsx'
import { useManga } from './store.js'

const App = () => {
	const getManga = useManga(state => state.getManga)
	const getCart = useManga(state => state.getCart)
	// const getUser = useUser(state => state.getUser)

	useEffect(() => {
		// getUser()
		getManga()
		getCart()
	}, [])

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favorites" element={<Favorite />} />
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/manga/:id" element={<Manga />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<Navigate replace to={'/'} />} />
			</Routes>
		</>
	)
}

export { App }
