import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Manga, MangaCard, MangaStore, UserStore } from '../interfaces'
import { addToCart, addToFavorite, auth, getAllManga, getPopularManga, getSimilar, removeFromCart, removeFromFavorite } from './api'

export const useManga = create(
	persist<MangaStore>(
		(set, get) => ({
			mangas: [],
			popular: [],
			cart: [],
			cartValue: 0,
			favorites: [],
			purchases: [],
			similarManga: [],
			getManga: async () => {
				const mangas: Manga[] = await getAllManga()
				const popular: Manga[] = await getPopularManga()
				set({ mangas: mangas, popular: popular })

				// const userId: number = JSON.parse(localStorage.getItem('user')!).state.userId
				// const favorites: Manga[] = await getUserFavorites(userId)

				// set({ favorites: favorites })

				// const updatedPopular = popular.map(manga => {
				// 	return {
				// 		...manga,
				// 		isFavorite: favorites.some(item => item.id === manga.id),
				// 	}
				// })
				// set({ popular: updatedPopular })

				// const updatedMangas = mangas.map(manga => {
				// 	return {
				// 		...manga,
				// 		isFavorite: favorites.some(item => item.id === manga.id),
				// 	}
				// })
				// set({ mangas: updatedMangas })
			},

			getSimilarManga: async id => {
				const similarManga: Manga[] = await getSimilar(id)
				set({ similarManga: similarManga })
			},

			addToCart: async (manga: MangaCard) => {
				const userId = JSON.parse(localStorage.getItem('user')!).state.userId
				await addToCart(userId, manga.id)
				set({ cart: [...get().cart, manga] })
				set({ cartValue: get().cartValue + manga.price })
				set({
					mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)),
				})
				set({
					popular: get().popular.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)),
				})
				set({
					favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isAdded: true } : m)),
				})
			},
			removeFromCart: async (id: number, price: number) => {
				const userId = JSON.parse(localStorage.getItem('user')!).state.userId
				await removeFromCart(userId, id)
				const newCart = get().cart.filter(item => item.id !== id)
				set({ cart: newCart })
				set({ cartValue: get().cartValue - price })
				set({
					mangas: get().mangas.map(manga => (manga.id === id ? { ...manga, isAdded: false } : manga)),
				})
				set({
					popular: get().popular.map(manga => (manga.id === id ? { ...manga, isAdded: false } : manga)),
				})
				set({
					favorites: get().favorites.map(manga => (manga.id === id ? { ...manga, isAdded: false } : manga)),
				})
			},

			addToFavorite: async (manga: MangaCard) => {
				const userId = JSON.parse(localStorage.getItem('user')!).state.userId
				await addToFavorite(userId, manga.id)
				set({ favorites: [...get().favorites, manga] })
				set({
					favorites: get().favorites.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)),
				})
				set({
					mangas: get().mangas.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)),
				})
				set({
					popular: get().popular.map(m => (m.id === manga.id ? { ...m, isFavorite: true } : m)),
				})
			},

			removeFromFavorite: async (id: number) => {
				const userId = JSON.parse(localStorage.getItem('user')!).state.userId
				await removeFromFavorite(userId, id)
				const newFavorites = get().favorites.filter(item => item.id !== id)
				set({ favorites: newFavorites })
				set({
					favorites: get().favorites.map(manga => (manga.id === id ? { ...manga, isFavorite: false } : manga)),
				})
				set({
					mangas: get().mangas.map(manga => (manga.id === id ? { ...manga, isFavorite: false } : manga)),
				})
				set({
					popular: get().popular.map(manga => (manga.id === id ? { ...manga, isFavorite: false } : manga)),
				})
			},
		}),
		{ name: 'mangas' }
	)
)

export const useUser = create(
	persist<UserStore>(
		(set, get) => ({
			userId: 2,
			username: 'user123',
			password: '123',
			isAuth: false,
			setLogin: login => set({ username: login }),
			setPassword: password => set({ password: password }),
			getUser: async () => {
				const response = await auth(get().username, get().password)
				set({ userId: response.id, isAuth: true })
			},
		}),
		{ name: 'user' }
	)
)
