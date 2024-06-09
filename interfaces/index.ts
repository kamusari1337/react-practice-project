export interface Manga {
	id: number
	title: string
	author: string
	description: string
	genre: string[]
	price: number
	wrap_path: string
	isAdded: boolean
	isFavorite: boolean
}

export interface MangaCard {
	id: number
	title: string
	price: number
	wrap_path: string
	isAdded: boolean
	isFavorite: boolean
}

export interface MangaStore {
	mangas: Manga[]
	popular: Manga[]
	cart: MangaCard[]
	cartValue: number
	favorites: MangaCard[]
	purchases: MangaCard[]
	similarManga: Manga[]
	getManga: () => void
	getSimilarManga: (id: number) => void
	addToCart: (manga: MangaCard) => void
	removeFromCart: (id: number, price: number) => void
	addToFavorite: (manga: MangaCard) => void
	removeFromFavorite: (id: number) => void
}

export interface UserStore {
	userId: number
	username: string
	password: string
	isAuth: boolean
	setLogin: (login: string) => void
	setPassword: (password: string) => void
	getUser: () => void
}
