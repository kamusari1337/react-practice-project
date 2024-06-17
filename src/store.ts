import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addToUserCart, addToUserFavorite, auth, confirmUser, getSimilar, getUserCart, getUserFavorite, getUserManga, getUserPopularManga, registerUser, removeAllFromUserCart, removeFromUserCart, removeFromUserFavorite } from './api'
import { Cart, Manga, MangaStore, UserStore } from './interfaces'

export const useManga = create(
	persist<MangaStore>(
		(set, get) => ({
			userId: 0,
			mangas: [],
			popular: [],
			cart: [],
			cartValue: 0,
			favorites: [],
			purchases: [],
			similarManga: [],
			setUser: () => {
				const id = JSON.parse(localStorage.getItem('user')!).state.userId
				set({ userId: id })
			},
			getManga: async () => {
				const mangas: Manga[] = await getUserManga(get().userId)
				const popular: Manga[] = await getUserPopularManga(get().userId)
				set({ mangas: mangas, popular: popular })
			},

			getCart: async () => {
				const { cart, amount_of_buying }: Cart = await getUserCart(get().userId)
				set({ cart: cart })
				set({ cartValue: amount_of_buying })
			},

			getFavorites: async () => {
				const favorites: Manga[] = await getUserFavorite(get().userId)
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
				const { cart, amount_of_buying }: Cart = await addToUserCart(get().userId, manga.id)
				set({ cart: cart })
				set({ cartValue: amount_of_buying })

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
				const { cart, amount_of_buying }: Cart = await removeFromUserCart(get().userId, id)
				set({ cart: cart })
				set({ cartValue: amount_of_buying })

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

			removeAllFromCart: async (id: number) => {
				const { cart, amount_of_buying }: Cart = await removeAllFromUserCart(get().userId, id)
				set({ cart: cart })
				set({ cartValue: amount_of_buying })

				set({
					mangas: get().mangas.map(item => (item.id === id ? { ...item, inCart: 0 } : item)),
				})
				set({
					popular: get().popular.map(item => (item.id === id ? { ...item, inCart: 0 } : item)),
				})
				set({
					favorites: get().favorites.map(item => (item.id === id ? { ...item, inCart: 0 } : item)),
				})
			},

			addToFavorite: async (manga: Manga) => {
				await addToUserFavorite(get().userId, manga.id)

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
				await removeFromUserFavorite(get().userId, id)
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
		(set, get) => {
			return {
				userId: null,
				username: null,
				password: null,
				email: null,
				isAuth: false,
				setLogin: login => set({ username: login }),
				setPassword: password => set({ password: password }),
				setEmail: email => set({ email: email }),
				getUser: async () => {
					const response = await auth(get().username!, get().password!)
					set({ userId: response.user_id, isAuth: true })
				},
				register: async () => {
					await registerUser(get().username!, get().password!, get().email!)
				},
				confirm: async (code: string) => {
					const response = await confirmUser(code, get().username!, get().password!, get().email!)
					return response.data
				},
				exit: () => {
					set({ userId: null, username: null, password: null, email: null, isAuth: false })
				},
			}
		},
		{ name: 'user' }
	)
)
