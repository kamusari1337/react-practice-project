import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConfirmModal } from '../components/ConfirmModal'
import styles from '../scss/pages/Register.module.sass'
import { BookLogo } from '../components/UI/icons/Icons'
import { useUser } from '../store.ts'

const Register = () => {
	const setLogin = useUser(state => state.setLogin)
	const setPassword = useUser(state => state.setPassword)
	const setEmail = useUser(state => state.setEmail)
	const registerUser = useUser(state => state.register)

	const [form, setForm] = useState({
		login: '',
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState({
		login: '',
		email: '',
		password: '',
	})
	const [showModal, setShowModal] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const validateForm = () => {
		const newErrors = {
			login: '',
			password: '',
			email: '',
		}

		if (!form.login) {
			newErrors.login = 'Поле "Логин" обязательно для заполнения'
		}

		if (!form.email) {
			newErrors.email = 'Поле "Почта" обязательно для заполнения'
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = 'Некорректный формат почты'
		}

		if (!form.password) {
			newErrors.password = 'Поле "Пароль" обязательно для заполнения'
		} else if (!newErrors.email && !newErrors.login && !newErrors.password) {
			setErrors(newErrors)
			return true
		}
		setErrors(newErrors)
	}

	const register = async () => {
		if (validateForm()) {
			setLogin(form.login)
			setPassword(form.password)
			setEmail(form.email)
			registerUser()
			setShowModal(true)
		}
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
						{errors.login && <span className={styles.error}>{errors.login}</span>}
						<div className={styles.section__list__field}>
							<input type="text" name="login" placeholder="Логин" value={form.login} onChange={handleChange} />
						</div>
						{errors.email && <span className={styles.error}>{errors.email}</span>}
						<div className={styles.section__list__field}>
							<input type="text" name="email" placeholder="Почта" value={form.email} onChange={handleChange} />
						</div>
						{errors.password && <span className={styles.error}>{errors.password}</span>}
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
