import axios from 'axios'

export const getAllManga = async () => {
	const response = await axios.get('http://127.0.0.1:5000/api/v1/manga')
	return response.data['all_manga']
}

export const getPopularManga = async () => {
	const response = await axios.get('http://127.0.0.1:5000/api/v1/top_manga')
	return response.data['top_manga']
}

export const getSimilar = async (id, setFn) => {
	const response = await axios.get(`http://127.0.0.1:5000/api/v1/similar_manga/${id}`)
	setFn(response.data['similar_manga'])
	return response.data['similar_manga']
}

export const auth = async (username, psw) => {
	const response = await axios.post('http://127.0.0.1:5000/auth', {
		username: username,
		psw: psw,
	})
	return response.data
}

export const registerUser = async (username, psw, email) => {
	const response = await axios.post('http://127.0.0.1:5000/api/v1/users', {
		username: username,
		psw: psw,
		email: email,
	})
	return response.data
}

export const getUserInfo = async id => {
	const response = await axios.get(`http://127.0.0.1:5000/api/v1/user/${id}/info`)
	return response.data
}

export const addToCart = async (id, mangaId) => {
	await axios.post(`http://127.0.0.1:5000/api/v1/users/${id}/add_to_cart`, { manga_id: mangaId })
}

export const removeFromCart = async (id, mangaId) => {
	await axios.delete(`http://127.0.0.1:5000/api/v1/users/${id}/delete_from_cart`, { manga_id: mangaId })
}

export const addToFavorite = async (id, mangaId) => {
	await axios.post(`http://127.0.0.1:5000/api/v1/users/${id}/add_to_favourite_manga`, { manga_id: mangaId })
}

export const removeFromFavorite = async (id, mangaId) => {
	await axios.delete(`http://127.0.0.1:5000/api/v1/users/${id}/delete_from_favourite_manga`, { manga_id: mangaId })
}
