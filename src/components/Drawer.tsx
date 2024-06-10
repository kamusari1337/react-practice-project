import styles from '../scss/components/Drawer.module.sass'
import { useManga } from '../store'
import { CartItem } from './CartItem'

interface DrawerProps {
	onClose: () => void
}

const Drawer = ({ onClose }: DrawerProps) => {
	const cartItems = useManga(state => state.cart)
	const cartValue = useManga(state => state.cartValue)
	const cartItemsLength = cartItems?.length

	return (
		<>
			<div className={styles.overlay} onClick={onClose}>
				<div
					className={styles.drawer}
					onClick={e => {
						e.stopPropagation()
					}}
				>
					{cartItemsLength > 0 ? <h2 className={styles.title}>Корзина: {cartItems.length}</h2> : null}
					{cartItems.length > 0 ? (
						<>
							<div className={styles.cartList}>
								{cartItems.map(card => (
									<CartItem key={card.id} id={card.id} wrap_path={card.wrap_path} title={card.title} price={card.price} />
								))}
							</div>
							<div className={styles.totalBlock}>
								<span>Итого:</span>
								<div></div>
								<b>{cartValue} руб.</b>
							</div>
							<div className={styles.button}>
								<a>Оформить заказ</a>
							</div>
						</>
					) : (
						<div className={styles.empty}>
							<img src="/icons/empty-cart.png" alt="empty-cart" />
							<h2>Ваша корзина пуста</h2>
							<p>Добавьте хотя бы одну книгу</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export { Drawer }
