import { Link } from 'react-router-dom'
import styles from '../scss/components/CartItem.module.sass'
import { useManga } from '../store'
import { Mark, Minus, Plus } from './UI/Buttons'
import { memo } from 'react'

interface CardProps {
	id: number
}

const CartItem = memo(({ id }: CardProps) => {
	const addToCart = useManga(state => state.addToCart)
	const removeFromCart = useManga(state => state.removeFromCart)
	const removeAllFromCart = useManga(state => state.removeAllFromCart)
	const manga = useManga(state => state.cart.filter(item => item.id === id)[0])

	const decreaseCartItem = () => {
		removeFromCart(id)
	}

	const deleteCartItem = () => {
		removeAllFromCart(id)
	}

	const increaseCartItem = () => {
		addToCart(manga)
	}

	return (
		<>
			<div className={styles.card}>
				<Link to={`/manga/${id}`}>
					<img className={styles.card__cover} src={manga.wrap_path} alt="anime cover" />
				</Link>
				<div className={styles.card__info}>
					<div className={styles.card__info__header}>
						<b>{manga.title}</b>
					</div>
					<div className={styles.card__info__bottom}>
						<b className={styles.card__total_price}>{manga.price * manga.inCart} руб.</b>
						<div className={styles.card__info__buttons}>
							<div className={styles.card__price}>
								<p>{manga.price} руб. *</p>
							</div>
							<div className={styles.card__buttons}>
								<span className={styles.card__buttons__count}>{manga.inCart}</span>
								<Plus onClick={increaseCartItem} />
								<Minus onClick={decreaseCartItem} />
								<Mark onClick={deleteCartItem} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
})

export { CartItem }
