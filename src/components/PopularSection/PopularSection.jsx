import CardList from '../CardList/CardList'
import styles from './PopularSection.module.sass'

const PopularSection = () => {
	const popularArray = [
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
		<div className={styles.section}>
			<div className={styles.container}>
				<p className={styles.title}>Популярное</p>
				<CardList array={popularArray}></CardList>
			</div>
		</div>
	)
}

export default PopularSection
