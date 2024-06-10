import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import styles from '../scss/pages/Manga.module.sass'
import { useManga } from '../store'

function Manga() {
	const id = +useParams().id!
	const manga = useManga(state => state.mangas[id - 1])

	const addToCart = useManga(state => state.addToCart)
	const removeFromCart = useManga(state => state.removeFromCart)

	const addToFavorite = useManga(state => state.addToFavorite)
	const removeFromFavorite = useManga(state => state.removeFromFavorite)

	const similarManga = useManga(state => state.similarManga)
	const getSimilarManga = useManga(state => state.getSimilarManga)

	useEffect(() => {
		getSimilarManga(id)
	}, [id])

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
			<Header></Header>
			<div className={styles.section}>
				<div className={styles.leftBlock}>
					<img className={styles.cover} src={manga.wrap_path} alt="manga-cover" />
					<div className={styles.actions}>
						<p className={styles.price}>
							Цена: <span>{manga.price} руб</span>
						</p>
						<div className={styles.buttons}>
							<img className={styles.button} onClick={onClickFavorite} src={manga.isFavorite ? '/icons/liked.svg' : '/icons/unliked.svg'} alt="like" />
							<div className={styles.addButtons}>
								{manga.inCart > 0 ? (
									<>
										<img className={styles.addButton} onClick={onClickPlus} src={manga.inCart > 0 ? '/icons/plus.svg' : '/icons/not-added.svg'} alt="plus-btn" />
										<img className={styles.minusButton} onClick={onClickMinus} src="/icons/minus.svg" alt="minus-btn" />
										<b className={styles.count}>{manga.inCart}</b>
									</>
								) : (
									<img className={styles.addButton} onClick={onClickPlus} src={manga.inCart > 0 ? '/icons/plus.svg' : '/icons/not-added.svg'} alt="plus-btn" />
								)}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.title}>
						<p className={styles.ru}>
							<b>{manga.title}</b>
						</p>
						<p className={styles.en}>{manga.title_en}</p>
					</div>
					<p>
						<b>Автор:</b> {manga.author}
					</p>
					<p>
						<b>Жанры:</b>
						{manga.genre.map(genre => {
							return <span key={genre}> {genre} </span>
						})}
					</p>
					<p>
						<b>Описание:</b> {manga.description}
					</p>
					<p>
						<b>Похожее: </b>
						{similarManga.length > 0 ? similarManga.map(manga => manga.title).join(', ') : 'Ничего похожего не найдено'}
					</p>
				</div>
			</div>
		</>
	)
}

export { Manga }
