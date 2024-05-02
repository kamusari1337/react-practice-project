import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../scss/components/CartItem.module.sass'
import { useManga } from '../store'

const CartItem = ({ id, wrap_path, title, price }) => {
	const removeFromCart = useManga(state => state.removeFromCart)
	const onDeleteCartItem = () => {
		removeFromCart({ id, price })
	}

	return (
		<>
			<div className={styles.card}>
				<Link to={`/manga/${id}`}>
					<img width={100} height={157} src={wrap_path} alt={wrap_path} />
				</Link>
				<div className={styles.info}>
					<div className={styles.header}>
						<p>{title}</p>
					</div>
					<div className={styles.bottom}>
						<p>{price} руб.</p>
						<img onClick={onDeleteCartItem} src="/icons/mark.svg" alt="delete" />
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItem
