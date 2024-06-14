import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConfirmModal } from '../components/ConfirmModal'
import styles from '../scss/pages/Register.module.sass'
import { BookLogo } from '../components/UI/icons/Icons'

const Register = () => {
	const [form, setForm] = useState({
		login: '',
		email: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const [showModal, setShowModal] = useState(false)

	const register = async () => {
		setShowModal(true)
	}

	return (
		<>
			{showModal && <ConfirmModal setModal={() => setShowModal(false)} />}
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<p>Mungify</p>
					<BookLogo />
				</div>
				<div className={styles.section}>
					<div className={styles.section__title}>Регистрация</div>
					<div className={styles.section__list}>
						<div className={styles.section__list__field}>
							<input type="text" name="login" placeholder="Логин" value={form.login} onChange={handleChange} />
						</div>
						<div className={styles.section__list__field}>
							<input type="text" name="email" placeholder="Почта" value={form.email} onChange={handleChange} />
						</div>
						<div className={styles.section__list__field}>
							<input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} />
						</div>
					</div>
					<div className={styles.section__bottom}>
						<div className={styles.section__bottom__button} onClick={register}>
							<p>Зарегистрироваться</p>
						</div>
						<div className={styles.section__bottom__link}>
							Уже есть аккаунт?{' '}
							<Link to="/login">
								<ins>Войти</ins>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { Register }
