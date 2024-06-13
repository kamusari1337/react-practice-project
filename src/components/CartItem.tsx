import { Link } from 'react-router-dom'
import styles from '../scss/components/CartItem.module.sass'
import { useManga } from '../store'

interface CardProps {
	id: number
}

const CartItem = ({ id }: CardProps) => {
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
						<p>{manga.title}</p>
					</div>
					<div className={styles.card__info__bottom}>
						<div className={styles.card__info__price}>
							<b>{manga.price * manga.inCart} руб.</b>
							<p>
								{manga.price} руб. * {manga.inCart}
							</p>
						</div>
						<div className={styles.card__buttons}>
							<img onClick={increaseCartItem} src="/icons/not-added.svg" alt="increase" />
							<p className={styles.card__buttons__count}>{manga.inCart}</p>
							<img onClick={decreaseCartItem} src="/icons/cart-minus.svg" alt="decrease" />
							<img onClick={deleteCartItem} src="/icons/mark.svg" alt="delete" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { CartItem }
