import styles from '../scss/components/ConfirmModal.module.sass'
import { useUser } from '../store.ts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalProps {
	setModal: () => void
}

const ConfirmModal = ({ setModal }: ModalProps) => {
	const [codeValue, setCodeValue] = useState('')
	const confirm = useUser(state => state.confirm)
	const navigate = useNavigate()

	const handleClick = () => {
		confirm(codeValue)
		navigate('/login')
	}

	return (
		<>
			<div className={styles.overlay} onClick={setModal}>
				<div
					className={styles.modal}
					onClick={e => {
						e.stopPropagation()
					}}
				>
					<div className={styles.modal__title}>Вам на почту отправлен код с подтверждением</div>
					<div className={styles.modal__input}>
						<input placeholder="Код" value={codeValue} onChange={e => setCodeValue(e.target.value)}></input>
					</div>
					<div onClick={handleClick} className={styles.modal__button}>
						Подтвердить
					</div>
				</div>
			</div>
		</>
	)
}

export { ConfirmModal }
