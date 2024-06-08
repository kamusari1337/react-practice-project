import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addToCart, addToFavorite, auth, getAllManga, getPopularManga, getUserInfo, removeFromCart, removeFromFavorite } from './api'

export const useManga = create(
	persist(
		(set, get) => ({
			mangas: [],
			popular: [],
			cart: [],
			cartValue: 0,
			favorites: [],

			getManga: async () => {
				const mangas = await getAllManga()
				const popular = await getPopularManga()

				const userId = JSON.parse(localStorage.getItem('user')).state.userId
				const userInfo = await getUserInfo(userId)

				const cart = userInfo.cart
				set({ cart: cart })
				const cartValue = userInfo.cart.map(manga => manga.price).reduce((a, b) => a + b, 0)
				set({ cartValue: cartValue })

				const favorites = userInfo.favourite_manga
				set({ favorites: favorites })

				const updatedPopular = popular.map(manga => {
					return {
						...manga,
						isAdded: cart.some(item => item.id === manga.id),
						isFavorite: favorites.some(item => item.id === manga.id),
					}
				})
				set({ popular: updatedPopular })

				const updatedMangas = mangas.map(manga => {
					return {
						...manga,
						isAdded: cart.some(item => item.id === manga.id),
						isFavorite: favorites.some(item => item.id === manga.id),
					}
				})
				set({ mangas: updatedMangas })
			},

			addToCart: async manga => {
				const userId = JSON.parse(localStorage.getItem('user')).state.userId
				await addToCart(userId, manga.id)
				set({ cart: [...get().cart, manga] })
				set({ cartValue: get().cartValue + manga.price })
				set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)) })
				set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)) })
				set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)) })
			},
			removeFromCart: async manga => {
				const userId = JSON.parse(localStorage.getItem('user')).state.userId
				await removeFromCart(userId, manga.id)
				const newCart = get().cart.filter(item => item.id !== manga.id)
				set({ cart: newCart })
				set({ cartValue: get().cartValue - manga.price })
				set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isAdded: false } : m)) })
				set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isAdded: false } : m)) })
				set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isAdded: false } : m)) })
			},

			addToFavorite: async manga => {
				const userId = JSON.parse(localStorage.getItem('user')).state.userId
				await addToFavorite(userId, manga.id)
				set({ favorites: [...get().favorites, manga] })
				set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)) })
				set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)) })
				set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)) })
			},

			removeFromFavorite: async manga => {
				const userId = JSON.parse(localStorage.getItem('user')).state.userId
				await removeFromFavorite(userId, manga.id)
				const newFavorites = get().favorites.filter(item => item.id !== manga.id)
				set({ favorites: newFavorites })
				set({ favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isFavorite: false } : m)) })
				set({ mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isFavorite: false } : m)) })
				set({ popular: get().popular.map(m => (m.id === manga.id ? { ...m, isFavorite: false } : m)) })
			},
		}),
		{ name: 'mangas' }
	)
)

export const useUser = create(
	persist(
		(set, get) => ({
			username: 'user123',
			password: '123',
			isAuth: false,
			userId: 2,
			setLogin: login => set({ username: login }),
			setPassword: password => set({ password: password }),
			getUser: async () => {
				const response = await auth(get().username, get().password)
				set({ id: response.id, isAuth: true })
			},
		}),
		{ name: 'user' }
	)
)
