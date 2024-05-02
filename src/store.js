import axios from 'axios'
import { create } from 'zustand'

export const useManga = create((set, get) => ({
	mangas: [{ author: '', description: '', isAdded: false, isFavorite: false, price: 0, title: '', wrap: '' }],
	popular: [],
	cart: [],
	cartValue: 0,
	favorites: [],
	favoritesAmount: 0,
	getManga: async () => {
		const response = await axios.get('http://127.0.0.1:5000/api/v1/manga')
		await response.data['all_manga'].map(manga => {
			manga.isAdded = false
			manga.isFavorite = false
		})
		await set({ mangas: response.data['all_manga'] })
	},
	getPopularManga: async () => {
		const response = await axios.get('http://127.0.0.1:5000/api/v1/top_manga')
		await response.data['top_manga'].map(manga => {
			manga.isAdded = false
			manga.isFavorite = false
		})
		await set({ popular: response.data['top_manga'] })
	},

	addToCart: manga => {
		set({ cart: [...get().cart, manga] })
		set({ cartValue: get().cartValue + manga.price })
		set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)) })
		set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)) })
		set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)) })
	},
	removeFromCart: manga => {
		const newCart = get().cart.filter(item => item.id !== manga.id)
		set({ cart: newCart })
		set({ cartValue: get().cartValue - manga.price })
		set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isAdded: false } : m)) })
		set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isAdded: false } : m)) })
		set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isAdded: false } : m)) })
	},

	addToFavorite: manga => {
		set({ favorites: [...get().favorites, manga] })
		set({ favoritesAmount: get().favoritesAmount + 1 })
		set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)) })
		set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)) })
		set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)) })
	},
	removeFromFavorite: manga => {
		const newFavorites = get().favorites.filter(item => item.id !== manga.id)
		set({ favorites: newFavorites })
		set({ favoritesAmount: get().favoritesAmount - 1 })
		set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isFavorite: false } : m)) })
		set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isFavorite: false } : m)) })
		set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isFavorite: false } : m)) })
	},
}))
