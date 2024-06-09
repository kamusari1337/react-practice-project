import axios from 'axios'

const API = axios.create({
	baseURL: 'http://127.0.0.1:5000/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
})

export const getAllManga = async <Manga>() => {
	const response = await API.get<Manga>('/manga')
	return response.data
}

export const getPopularManga = async <Manga>() => {
	const response = await API.get<Manga>('/top_manga')
	return response.data
}

export const getSimilar = async <Manga>(id: number) => {
	const response = await API.get<Manga>(`/similar_manga/${id}`)
	return response.data
}

export const auth = async (username: string, psw: string) => {
	const response = await API.post('/auth', {
		data: {
			username: username,
			psw: psw,
		},
	})
	return response.data
}

export const registerUser = async (username: string, psw: string, email: string) => {
	const response = await API.post('/users', {
		data: {
			username: username,
			psw: psw,
			email: email,
		},
	})
	return response.data
}

export const getUserFavorites = async <Manga>(id: number) => {
	const response = await API.get<Manga>(`/user/${id}/info`)
	return response.data
}

export const addToCart = async (id: number, mangaId: number) => {
	await API.post<number>(`/${id}/cart`, {
		data: {
			manga_id: mangaId,
		},
	})
}

export const removeFromCart = async (id: number, mangaId: number) => {
	await API.delete<number>(`/users/${id}/cart`, {
		data: {
			manga_id: mangaId,
		},
	})
}

export const addToFavorite = async (id: number, mangaId: number) => {
	await API.post<number>(`/users/${id}/favorite`, {
		data: {
			manga_id: mangaId,
		},
	})
}

export const removeFromFavorite = async (id: number, mangaId: number) => {
	await API.delete<number>(`/users/${id}/favorite`, {
		data: {
			manga_id: mangaId,
		},
	})
}
