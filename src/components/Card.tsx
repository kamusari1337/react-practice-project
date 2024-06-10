import { Link } from 'react-router-dom'
import styles from '../scss/components/Card.module.sass'
import { useManga } from '../store'

interface CardProps {
	id: number
}

const Card = ({ id }: CardProps) => {
	const addToCart = useManga(state => state.addToCart)
	const removeFromCart = useManga(state => state.removeFromCart)

	const addToFavorite = useManga(state => state.addToFavorite)
	const removeFromFavorite = useManga(state => state.removeFromFavorite)

	const manga = useManga(state => state.mangas[id - 1])

	const onClickFavorite = () => {
		manga.isFavorite ? removeFromFavorite(id) : addToFavorite(manga)
	}

	const onClickPlus = () => {
		addToCart(manga)
	}

	const onClickMinus = () => {
		removeFromCart(manga.id)
	}

	return (
		<>
			<div className={styles.card}>
				<Link to={`/manga/${manga.id}`}>
					<img className={styles.card__cover} src={manga.wrap_path} alt="manga-cover" />
				</Link>
				<p className={styles.card__title}>{manga.title}</p>
				<div className={styles.card__bottomLine}>
					<div className={styles.card__bottomLine__left}>
						<span>Цена:</span>
						<p>{manga.price} руб.</p>
					</div>
					<div className={styles.card__bottomLine__right}>
						<img onClick={onClickFavorite} src={manga.isFavorite ? '/icons/liked.svg' : '/icons/unliked.svg'} alt="like-btn" />
						<div className={styles.card__bottomLine__right_addButtons}>
							{manga.inCart > 0 ? (
								<>
									<img onClick={onClickPlus} src={manga.inCart > 0 ? '/icons/plus.svg' : '/icons/not-added.svg'} alt="plus-btn" />
									<img onClick={onClickMinus} src="/icons/minus.svg" alt="minus-btn" />
									<b className={styles.card__bottomLine__right_addButtons_count}>{manga.inCart}</b>
								</>
							) : (
								<img className={styles.addButton} onClick={onClickPlus} src={manga.inCart > 0 ? '/icons/plus.svg' : '/icons/not-added.svg'} alt="plus-btn" />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { Card }
