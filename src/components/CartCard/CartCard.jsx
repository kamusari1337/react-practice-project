/* eslint-disable react/prop-types */
import styles from './CartCard.module.sass'

const CartCard = ({ img, title, amount }) => {
	return (
		<>
			<div className={styles.card}>
				<img className={styles.cover} src={img} alt="manga-cover" />
				<p className={styles.title}>{title}</p>
				<div className={styles.bottomLine}>
					<div className={styles.bottomLineLeft}>
						<p>Цена</p>
						<p>{amount} руб.</p>
					</div>
					<div className={styles.bottomLineRight}>
						<a href="#">
							<img className={styles.likeButton} src="/icons/unliked.svg" alt="like-btn" />
						</a>
						<a href="#">
							<img className={styles.addButton} src="/icons/not-added.svg" alt="add-btn" />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartCard
