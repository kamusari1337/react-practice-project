import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Cart, Manga, MangaStore, UserStore } from '../interfaces'
import { addToCart, addToFavorite, auth, getCart, getFavoriteManga, getSimilar, getUserManga, getUserPopularManga, removeFromCart, removeFromFavorite } from './api'

export const useManga = create(
	persist<MangaStore>(
		(set, get) => ({
			// userId: JSON.parse(localStorage.getItem('user')!).state.userId,
			userId: 1,
			mangas: [],
			popular: [],
			cart: [],
			cartValue: 0,
			favorites: [],
			purchases: [],
			similarManga: [],
			getManga: async () => {
				const mangas: Manga[] = await getUserManga(get().userId)
				const popular: Manga[] = await getUserPopularManga(get().userId)
				set({ mangas: mangas, popular: popular })
			},

			getCart: async () => {
				const { cart, cartValue }: Cart = await getCart(get().userId)
				set({ cart: cart })
				set({ cartValue: cartValue })
			},

			getFavorites: async () => {
				const favorites: Manga[] = await getFavoriteManga(get().userId)
				set({ favorites: favorites })
			},

			getPurchased: async () => {
				const purchases: Manga[] = await getUserManga(get().userId)
				set({ purchases: purchases })
			},

			getSimilarManga: async id => {
				const similarManga: Manga[] = await getSimilar(id)
				set({ similarManga: similarManga })
			},

			addToCart: async (manga: Manga) => {
				const userId = JSON.parse(localStorage.getItem('user')!).state.userId
				await addToCart(userId, manga.id)
				set({ cart: [...get().cart, manga] })
				set({ cartValue: get().cartValue + manga.price })
				set({
					mangas: get().mangas.map(item => (item.id === manga.id ? { ...item, inCart: item.inCart + 1 } : item)),
				})
				set({
					popular: get().popular.map(item => (item.id === manga.id ? { ...item, inCart: item.inCart + 1 } : item)),
				})
				set({
					favorites: get().favorites.map(item => (item.id === manga.id ? { ...item, inCart: item.inCart + 1 } : item)),
				})
			},

			removeFromCart: async (id: number) => {
				// const userId = JSON.parse(localStorage.getItem('user')!).state.userId

				const { cart, cartValue }: Cart = await removeFromCart(get().userId, id)
				set({ cart: cart })
				set({ cartValue: cartValue })

				// const newCart = get().cart.filter(item => item.id !== id)
				// set({ cart: newCart })
				// set({ cartValue: get().cartValue - price })
				set({
					mangas: get().mangas.map(item => (item.id === id ? { ...item, inCart: item.inCart - 1 } : item)),
				})
				set({
					popular: get().popular.map(item => (item.id === id ? { ...item, inCart: item.inCart - 1 } : item)),
				})
				set({
					favorites: get().favorites.map(item => (item.id === id ? { ...item, inCart: item.inCart - 1 } : item)),
				})
			},

			addToFavorite: async (manga: Manga) => {
				// const userId = JSON.parse(localStorage.getItem('user')!).state.userId
				await addToFavorite(get().userId, manga.id)

				manga.isFavorite = true
				set({ favorites: [...get().favorites, manga] })

				set({
					mangas: get().mangas.map(item => (item.id === manga.id ? { ...item, isFavorite: true } : item)),
				})

				set({
					popular: get().popular.map(item => (item.id === manga.id ? { ...item, isFavorite: true } : item)),
				})
			},

			removeFromFavorite: async (id: number) => {
				// const userId = JSON.parse(localStorage.getItem('user')!).state.userId

				await removeFromFavorite(get().userId, id)
				const newFavorites = get().favorites.filter(item => item.id !== id)
				set({ favorites: newFavorites })
				set({
					mangas: get().mangas.map(item => (item.id === id ? { ...item, isFavorite: false } : item)),
				})
				set({
					popular: get().popular.map(item => (item.id === id ? { ...item, isFavorite: false } : item)),
				})
			},
		}),
		{ name: 'mangas' }
	)
)

export const useUser = create(
	persist<UserStore>(
		(set, get) => ({
			userId: 1,
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
