import styles from '../scss/components/PopularSection.module.sass'
import { useManga } from '../store.js'
import { Card } from './Card.js'

const PopularSection = () => {
	const popular = useManga(state => state.popular)

	return (
		<div className={styles.section}>
			<p className={styles.section__title}>Популярное</p>
			<div className={styles.section__list}>
				{popular.map(manga => (
					<Card key={manga.id} {...manga} />
				))}
			</div>
		</div>
	)
}

export { PopularSection }
