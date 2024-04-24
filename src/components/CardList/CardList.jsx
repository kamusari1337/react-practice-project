/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Card from '../Card/Card'
import styles from './CardList.module.sass'

const CardList = ({ array }) => {
	return (
		<>
			<div className={styles.list}>
				{array.map(card => (
					<Card img={card.wrap_path} title={card.title} amount={card.amount}></Card>
				))}
			</div>
		</>
	)
}

export default CardList
