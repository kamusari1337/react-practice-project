import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { FavoritePage } from './pages/Favorite.tsx'
import { HomePage } from './pages/Home.tsx'
import { LoginPage } from './pages/Login.tsx'
import { MangaPage } from './pages/Manga.tsx'
import { ProfilePage } from './pages/Profile.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
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
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/favorites" element={<FavoritePage />} />
				<Route exact path="/profile" element={<ProfilePage />}></Route>
				<Route exact path="/manga/:id" element={<MangaPage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/register" element={<RegisterPage />} />
				<Route exact path="/*" element={<Navigate replace to={'/'} />} />
			</Routes>
		</>
	)
}

export { App }
