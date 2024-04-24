import CardList from '../CardList/CardList'
import styles from './SearchSection.module.sass'

const SearchSection = () => {
	const searchArray = [
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			amount: '12 499',
		},
	]

	return (
		<div>
			<div className={styles.section}>
				<div className={styles.container}>
					<div className={styles.header}>
						<p className={styles.title}>Все книги</p>
						<div className={styles.search}>
							<img src="/icons/search.svg" alt="search-svg" />
							<input type="text" placeholder="Поиск..." />
						</div>
					</div>
					<CardList array={searchArray}></CardList>
				</div>
			</div>
		</div>
	)
}

export default SearchSection
