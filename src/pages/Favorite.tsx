import { CiFaceMeh } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import styles from '../scss/pages/Favorite.module.sass'
import { useManga } from '../store'

const Favorite = () => {
	const favorites = useManga(state => state.favorites)

	return (
		<>
			<Header />
			<div className={styles.section}>
				<p className={styles.title}>Мои закладки</p>
				<div className={styles.list}>
					{favorites.length ? (
						favorites.map(manga => <Card key={manga.id} {...manga} />)
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

export { Favorite }
