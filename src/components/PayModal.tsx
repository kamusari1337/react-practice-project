import { useState } from 'react'
import styles from '../scss/components/PayModal.module.sass'
import { useManga } from '../store'

interface PayModalProps {
	onClose: () => void
}

const PayModal = ({ onClose }: PayModalProps) => {
	const [numberValue, setNumberValue] = useState('')
	const [dateValue, setDateValue] = useState('')
	const [cvvValue, setCvvValue] = useState('')
	const [error, setError] = useState({
		message: '',
	})

	const validate = () => {
		const newError = {
			message: '',
		}

		if (!numberValue) {
			newError.message = 'Поле "Номер карты" обязательно для заполнения'
			setError(newError)
			return
		} else if (!dateValue) {
			newError.message = 'Поле "Дата карты" обязательно для заполнения'
			setError(newError)
			return
		} else if (!cvvValue) {
			newError.message = 'Поле "CVV" обязательно для заполнения'
			setError(newError)
			return
		} else {
			newError.message = ''
			setError(newError)
			return true
		}
	}

	const cartValue = useManga(state => state.cartValue)
	const makePayment = useManga(state => state.makePayment)

	const formatInput = (input: string) => {
		const digitsOnly = input.replace(/\D/g, '')
		const formattedValue = digitsOnly.replace(/(.{4})/g, '$1 ')
		return formattedValue.trim()
	}

	const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (/^\d{0,4}$/.test(value)) {
			setCvvValue(value)
		}
	}

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const formattedValue = value
			.replace(/[^0-9]/g, '')
			.slice(0, 4)
			.replace(/(\d{2})(\d{1,2})/, '$1/$2')

		setDateValue(formattedValue.slice(0, 5))
	}

	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const formattedValue = formatInput(inputValue)
		setNumberValue(formattedValue)
	}

	const handleClick = () => {
		if (validate()) {
			makePayment()
		}
	}

	return (
		<div className={styles.modal_overlay} onClick={onClose}>
			<div className={styles.modal} onClick={e => e.stopPropagation()}>
				<div className={styles.modal__title}>Оформление заказа</div>
				{error.message && <span className={styles.error}>{error.message}</span>}
				<input className={styles.card__pan} type="text" value={numberValue} onChange={handleNumberChange} placeholder="0000 0000 0000 0000" maxLength={19}></input>
				<div className={styles.card__data}>
					<input className={styles.card__date} type="text" value={dateValue} onChange={handleDateChange} placeholder="ММ/ГГ" maxLength={5} />
					<input className={styles.card__ccv} type="text" value={cvvValue} onChange={handleCvvChange} placeholder="CVV" maxLength={3} />
				</div>
				<div className={styles.price}>
					<span>Итого: </span>
					<b>{cartValue} руб.</b>
				</div>
				<div onClick={handleClick} className={styles.modal__button}>
					Оформить
				</div>
			</div>
		</div>
	)
}

export { PayModal }
