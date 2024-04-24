import CartList from '../../components/CartList/CartList'
import styles from './Cart.module.sass'

const Cart = () => {
	const cartArray = [
		{
			wrap_path: '/image/one-piece.jpg',
			title: 'Название книги',
			description: 'Описание книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			description: 'Описание книги',
			title: 'Название книги',
			amount: '12 499',
		},
		{
			wrap_path: '/image/one-piece.jpg',
			description: 'Описание книги',
			title: 'Название книги',
			amount: '12 499',
		},
	]
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>Mungify</div>
				<div className={styles.section}>
					<div className={styles.title}>Корзина</div>
					<div className={styles.list}>
						<CartList array={cartArray}></CartList>
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart
