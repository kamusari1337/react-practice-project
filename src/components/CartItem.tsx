import { Link } from 'react-router-dom'
import styles from '../scss/components/CartItem.module.sass'
import { useManga } from '../store'

interface CardProps {
	id: number
	wrap_path: string
	title: string
	price: number
}

const CartItem = ({ id, wrap_path, title, price }: CardProps) => {
	const removeFromCart = useManga(state => state.removeFromCart)
	const onDeleteCartItem = () => {
		removeFromCart(id)
	}

	return (
		<>
			<div className={styles.card}>
				<Link to={`/manga/${id}`}>
					<img width={100} height={157} src={wrap_path} alt={wrap_path} />
				</Link>
				<div className={styles.card__info}>
					<div className={styles.card__info__header}>
						<p>{title}</p>
					</div>
					<div className={styles.card__info__bottom}>
						<p>{price} руб.</p>
						<img onClick={onDeleteCartItem} src="/icons/mark.svg" alt="delete" />
					</div>
				</div>
			</div>
		</>
	)
}

export { CartItem }
