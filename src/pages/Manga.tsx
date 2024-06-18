import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Like, LikeFilled, MinusFilled, Plus, PlusFilled } from '../components/UI/Buttons'
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
	}, [getSimilarManga, id])

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
				<div className={styles.section__left}>
					<img className={styles.section__left__cover} src={manga.wrap_path} alt="manga-cover" />
					<div className={styles.section__left__actions}>
						<p className={styles.section__left__actions__price}>
							Цена: <span>{manga.price} руб</span>
						</p>
						<div className={styles.section__left__actions__buttons}>
							{manga.isFavorite ? <LikeFilled onClick={onClickFavorite} /> : <Like onClick={onClickFavorite} />}
							{manga.inCart > 0 ? (
								<>
									<b className={styles.section__left__actions__count}>{manga.inCart}</b>
									<MinusFilled onClick={onClickMinus} />
									<PlusFilled onClick={onClickPlus} />
								</>
							) : (
								<Plus onClick={onClickPlus} />
							)}
						</div>
					</div>
				</div>
				<div className={styles.section__right}>
					<div className={styles.section__right__title}>
						<p className={styles.section__right__title__ru}>
							<b>{manga.title}</b>
						</p>
						<p className={styles.section__right__title__en}>{manga.title_en}</p>
					</div>
					<p>
						<b>Автор:</b> {manga.author}
					</p>
					<p>
						<b>Жанры: </b>
						{manga.genre.map((item, index) => {
							return (
								<span className={styles.section__right__genre} key={`genre${item}`}>
									{item}
									{index < manga.genre.length - 1 && ', '}
								</span>
							)
						})}
					</p>
					<p>
						<b>Описание:</b> {manga.description}
					</p>
					<p>
						<b>Похожее: </b>
						{similarManga.length > 0
							? similarManga.map((item, index) => (
									<Link to={`/manga/${item.id}`} key={`similar${index}`}>
										<span className={styles.section__right__similar}>{item.title}</span>
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
