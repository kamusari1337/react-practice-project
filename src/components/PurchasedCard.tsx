import { Link } from 'react-router-dom'
import styles from '../scss/components/PurchasedCard.module.sass'
import { useManga } from '../store'
import { Like, LikeFilled } from './UI/Buttons'
import { memo } from 'react'
import { Manga } from '../interfaces.ts'

const PurchasedCard = memo((manga: Manga) => {
	const addToFavorite = useManga(state => state.addToFavorite)
	const removeFromFavorite = useManga(state => state.removeFromFavorite)

	const onClickFavorite = () => {
		manga.isFavorite ? removeFromFavorite(manga.id) : addToFavorite(manga)
	}

	return (
		<>
			<div className={styles.card}>
				<Link to={`/manga/${manga.id}`}>
					<img className={styles.card__cover} src={manga.wrap_path} alt="manga-cover" />
				</Link>
				<div className={styles.cart__info}>
					<p className={styles.card__title}>{manga.title}</p>
					<div className={styles.card__bottomLine}>
						<div className={styles.card__bottomLine__price}>
							<p>Цена:</p>
							<p>{manga.price} руб. &#215;</p>
							<b>{manga.inCart}</b>
						</div>
						<div>{manga.isFavorite ? <LikeFilled onClick={onClickFavorite} /> : <Like onClick={onClickFavorite} />}</div>
					</div>
				</div>
			</div>
		</>
	)
})

export { PurchasedCard }
