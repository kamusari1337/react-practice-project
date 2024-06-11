import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
				<div className={styles.section__leftBlock}>
					<img className={styles.section__leftBlock__cover} src={manga.wrap_path} alt="manga-cover" />
					<div className={styles.section__leftBlock__actions}>
						<p className={styles.section__leftBlock__actions__price}>
							Цена: <span>{manga.price} руб</span>
						</p>
						<div className={styles.section__leftBlock__actions__buttons}>
							<img onClick={onClickFavorite} src={manga.isFavorite ? '/icons/liked.svg' : '/icons/unliked.svg'} alt="like" />
							<div className={styles.section__leftBlock__actions__buttons__modifyButtons}>
								{manga.inCart > 0 ? (
									<>
										<img onClick={onClickPlus} src={manga.inCart > 0 ? '/icons/plus.svg' : '/icons/not-added.svg'} alt="plus-btn" />
										<img onClick={onClickMinus} src="/icons/minus.svg" alt="minus-btn" />
										<b className={styles.section__leftBlock__actions__buttons__modifyButtons__count}>{manga.inCart}</b>
									</>
								) : (
									<img className={styles.addButton} onClick={onClickPlus} src={manga.inCart > 0 ? '/icons/plus.svg' : '/icons/not-added.svg'} alt="plus-btn" />
								)}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.section__rightBlock}>
					<div className={styles.section__rightBlock__title}>
						<p className={styles.section__rightBlock__title__ru}>
							<b>{manga.title}</b>
						</p>
						<p className={styles.section__rightBlock__title__en}>{manga.title_en}</p>
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
						{similarManga.length > 0
							? similarManga.map((manga, index) => (
									<Link to={`/manga/${manga.id}`}>
										<span>{manga.title}</span>
										{index < similarManga.length - 1 && ', '}
									</Link>
							  ))
							: 'Ничего похожего не найдено'}
					</p>
				</div>
			</div>
		</>
	)
}

export { Manga }
