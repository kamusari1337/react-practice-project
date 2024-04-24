/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import CartCard from '../CartCard/CartCard'

const CartList = ({ array }) => {
	return (
		<>
			{array.map(card => (
				<CartCard img={card.wrap_path} title={card.title} amount={card.amount} description={card.description}></CartCard>
			))}
		</>
	)
}

export default CartList
