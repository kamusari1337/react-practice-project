import axios from 'axios'

const API = axios.create({
	baseURL: 'http://127.0.0.1:5000/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

export const getAllManga = async <Manga>() => {
	try {
		const response = await API.get<Manga>('/manga')
		return response.data
	} catch (error) {
		console.log(error, 'error')
	}
}

export const getPopularManga = async <Manga>() => {
	try {
		const response = await API.get<Manga>('/top_manga')
		return response.data
	} catch (error) {
		console.log(error, 'error')
	}
}

export const getSimilar = async <Manga>(id: number) => {
	try {
		const response = await API.get<Manga>(`/similar_manga/${id}`)
		return response.data
	} catch (error) {
		console.log(error, 'error')
	}
}

export const auth = async (username: string, psw: string) => {
	try {
		const response = await API.post('/auth', {
			data: {
				username: username,
				psw: psw,
			},
		})
		return response.data
	} catch (error) {
		console.log(error, 'error')
	}
}

export const registerUser = async (username: string, psw: string, email: string) => {
	try {
		const response = await API.post('/users', {
			data: {
				username: username,
				psw: psw,
				email: email,
			},
		})
		return response.data
	} catch (error) {
		console.log(error, 'error')
	}
}

export const getUserFavorites = async <Manga>(id: number) => {
	try {
		const response = await API.get<Manga>(`/user/${id}/info`)
		return response.data
	} catch (error) {
		console.log(error, 'error')
	}
}

export const addToCart = async (id: number, mangaId: number) => {
	try {
		await API.post<number>(`/${id}/cart`, {
			data: {
				manga_id: mangaId,
			},
		})
	} catch (error) {
		console.log(error, 'error')
	}
}

export const removeFromCart = async (id: number, mangaId: number) => {
	try {
		await API.delete<number>(`/users/${id}/cart`, {
			data: {
				manga_id: mangaId,
			},
		})
	} catch (error) {
		console.log(error, 'error')
	}
}

export const addToFavorite = async (id: number, mangaId: number) => {
	try {
		await API.post<number>(`/users/${id}/favorite`, {
			data: {
				manga_id: mangaId,
			},
		})
	} catch (error) {
		console.log(error, 'error')
	}
}

export const removeFromFavorite = async (id: number, mangaId: number) => {
	try {
		await API.delete<number>(`/users/${id}/favorite`, {
			data: {
				manga_id: mangaId,
			},
		})
	} catch (error) {
		console.log(error, 'error')
	}
}
