import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FavoritePage from './pages/FavoritePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MangaPage from './pages/MangaPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import { useManga } from './store.js'

const App = () => {
	const getManga = useManga(state => state.getManga)
	const getPopularManga = useManga(state => state.getPopularManga)

	useEffect(() => {
		getManga()
		getPopularManga()
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

export default App
