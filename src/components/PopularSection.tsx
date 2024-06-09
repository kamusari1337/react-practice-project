import styles from '../scss/components/PopularSection.module.sass'
import { useManga } from '../store.js'
import { Card } from './Card.js'

const PopularSection = () => {
	const popular = useManga(state => state.popular)

	return (
		<div className={styles.section}>
			<p className={styles.title}>Популярное</p>
			<div className={styles.list}>
				{popular.map(card => (
					<Card key={card.id} {...card} />
				))}
			</div>
		</div>
	)
}

export { PopularSection }
