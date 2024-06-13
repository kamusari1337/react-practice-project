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
							<div className={styles.drawer__cartList}>
								{cartItems.map(item => (
									<CartItem key={'cart' + item.id} {...item} />
								))}
							</div>
							<div className={styles.drawer__totalBlock}>
								<span>Итого:</span>
								<div></div>
								<b>{cartValue} руб.</b>
							</div>
							<div className={styles.drawer__button}>
								<a>Оформить заказ</a>
							</div>
						</>
					) : (
						<div className={styles.drawer__empty}>
							<img src="/icons/empty-cart.png" alt="empty-cart" />
							<p className={styles.drawer__empty__header}>Ваша корзина пуста</p>
							<p>Добавьте хотя бы одну книгу</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export { Drawer }
