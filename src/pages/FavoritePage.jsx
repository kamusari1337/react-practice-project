import { CiFaceMeh } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Header from '../components/Header'
import styles from '../scss/pages/FavoritePage.module.sass'
import { useManga } from '../store'

const FavoritePage = () => {
	const favorites = useManga(state => state.favorites)
	const favoritesAmount = useManga(state => state.favoritesAmount)

	return (
		<>
			<Header />
			<div className={styles.section}>
				<p className={styles.title}>Мои закладки</p>
				<div className={styles.list}>
					{favoritesAmount > 0 ? (
						favorites.map(card => <Card key={card.id} {...card} />)
					) : (
						<div className={styles.notFound}>
							<CiFaceMeh size={200} className={styles.icon} />
							<b>Закладок нет</b>
							<span>Вы ничего не добавляли в них ...</span>
							<Link to={'/'} className={styles.button}>
								<img src="/icons/arrow-white.svg" alt="arrow" />
								<p>Вернуться</p>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default FavoritePage
