import { Link } from 'react-router-dom'
import styles from '../scss/components/Card.module.sass'
import { useManga } from '../store'

const Card = ({ id, wrap_path, title, price, isAdded, isFavorite }) => {
	const addToCart = useManga(state => state.addToCart)
	const removeFromCart = useManga(state => state.removeFromCart)

	const addToFavorite = useManga(state => state.addToFavorite)
	const removeFromFavorite = useManga(state => state.removeFromFavorite)

	const onClickFavorite = () => {
		isFavorite ? removeFromFavorite({ id }) : addToFavorite({ id, wrap_path, title, price, isAdded, isFavorite })
	}

	const onClickPlus = () => {
		isAdded ? removeFromCart({ id, price }) : addToCart({ id, wrap_path, title, price, isAdded, isFavorite })
	}

	return (
		<>
			<div className={styles.card}>
				<Link to={`/manga/${id}`}>
					<img className={styles.cover} src={wrap_path} alt="manga-cover" />
				</Link>
				<p className={styles.title}>{title}</p>
				<div className={styles.bottomLine}>
					<div className={styles.bottomLineLeft}>
						<span>Цена:</span>
						<p>{price} руб.</p>
					</div>
					<div className={styles.bottomLineRight}>
						<img className={styles.likeButton} onClick={onClickFavorite} src={isFavorite ? '/icons/liked.svg' : '/icons/unliked.svg'} alt="like-btn" />
						<img className={styles.addButton} onClick={onClickPlus} src={isAdded ? '/icons/added.svg' : '/icons/not-added.svg'} alt="plus-btn" />
					</div>
				</div>
			</div>
		</>
	)
}

export { Card }
