import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSimilar } from '../api'
import { Header } from '../components/Header'
import styles from '../scss/pages/MangaPage.module.sass'
import { useManga } from '../store'

function MangaPage() {
	const { id } = useParams()
	const intId = parseInt(id)
	const { author, description, isAdded, isFavorite, price, title, wrap_path, genre } = useManga(state => state.mangas[intId - 1])
	const addToCart = useManga(state => state.addToCart)
	const removeFromCart = useManga(state => state.removeFromCart)
	const addToFavorite = useManga(state => state.addToFavorite)
	const removeFromFavorite = useManga(state => state.removeFromFavorite)
	const [similar, setSimilar] = useState([])

	useEffect(() => {
		getSimilar(intId, setSimilar)
	}, [])

	const onClickFavorite = () => {
		isFavorite ? removeFromFavorite({ id: intId }) : addToFavorite({ id: intId, wrap_path, title, price, isAdded, isFavorite })
	}

	const onClickPlus = () => {
		isAdded ? removeFromCart({ id: intId, price }) : addToCart({ id: intId, wrap_path, title, price, isAdded, isFavorite })
	}

	return (
		<>
			<Header></Header>
			<div className={styles.section}>
				<div className={styles.leftBlock}>
					<img className={styles.cover} src={wrap_path} alt="manga-cover" />
					<div className={styles.actions}>
						<p className={styles.price}>Цена: {price} руб</p>
						<div className={styles.buttons}>
							<img className={styles.button} onClick={onClickFavorite} src={isFavorite ? '/icons/liked.svg' : '/icons/unliked.svg'} alt="like" />
							<img className={styles.button} onClick={onClickPlus} src={isAdded ? '/icons/added.svg' : '/icons/not-added.svg'} alt="add" />
						</div>
					</div>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.title}>
						<p className={styles.ru}>
							<b>{title}</b>
						</p>
						<p className={styles.en}>{title}</p>
					</div>
					<p>
						<b>Автор:</b> {author}
					</p>
					<p>
						<b>Описание:</b> {description}
					</p>
					<p>
						<b>Жанры:</b>{' '}
						{genre.map(genre => {
							return <span key={genre}> {genre} </span>
						})}
					</p>
					<p>
						<b>Похожее: </b>
						{similar.length > 0 ? similar.map(manga => manga.title).join(', ') : 'Ничего похожего не найдено'}
					</p>
				</div>
			</div>
		</>
	)
}

export { MangaPage }
