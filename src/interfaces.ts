export interface Manga {
	id: number
	title: string
	title_en: string
	author: string
	description: string
	genre: string[]
	price: number
	wrap_path: string
	inCart: number
	isFavorite: boolean
}

export interface Cart {
	cart: Manga[]
	amount_of_buying: number
}

export interface Purchase {
	code: string
	content: Manga[]
	sum: number
}

export interface MangaStore {
	userId: number
	mangas: Manga[]
	popular: Manga[]
	cart: Manga[]
	cartValue: number
	favorites: Manga[]
	purchases: Purchase[]
	similarManga: Manga[]
	setUser: () => void
	getManga: () => Promise<void>
	getCart: () => Promise<void>
	getFavorites: () => Promise<void>
	getPurchased: () => Promise<void>
	makePayment: (cardNumber: string) => Promise<void>
	getSimilarManga: (id: number) => Promise<void>
	addToCart: (manga: Manga) => Promise<void>
	removeFromCart: (id: number) => Promise<void>
	removeAllFromCart: (id: number) => Promise<void>
	addToFavorite: (manga: Manga) => Promise<void>
	removeFromFavorite: (id: number) => Promise<void>
}

export interface UserStore {
	userId: number | null
	username: string | null
	password: string | null
	email: string | null
	isAuth: boolean
	setLogin: (login: string) => void
	setPassword: (password: string) => void
	setEmail: (email: string) => void
	getUser: () => void
	register: () => Promise<void>
	confirm: (code: string) => Promise<void>
	exit: () => void
}
