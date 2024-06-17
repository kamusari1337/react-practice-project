import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookLogo } from '../components/UI/icons/Icons'
import styles from '../scss/pages/Login.module.sass'
import { useUser } from '../store'

const Login = () => {
	const isAuth = useUser(state => state.isAuth)
	const setLogin = useUser(state => state.setLogin)
	const setPassword = useUser(state => state.setPassword)
	const getUser = useUser(state => state.getUser)
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const [form, setForm] = useState({
		login: '',
		password: '',
	})
	const [errors, setErrors] = useState({
		login: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const validateForm = () => {
		const newErrors = {
			login: '',
			password: '',
		}

		if (!form.login) {
			newErrors.login = 'Поле "Логин" обязательно для заполнения'
		}

		if (!form.password) {
			newErrors.password = 'Поле "Пароль" обязательно для заполнения'
		} else if (!newErrors.password && !newErrors.login) {
			return true
		}
		setErrors(newErrors)
	}

	const login = () => {
		if (validateForm()) {
			setLogin(form.login)
			setPassword(form.password)
			getUser()
		}
	}

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<p>Mungify</p>
					<BookLogo />
				</div>
				<div className={styles.section}>
					<div className={styles.section__title}>Вход</div>
					<div className={styles.section__list}>
						{errors.login && <span className={styles.error}>{errors.login}</span>}
						<div className={styles.section__list__field}>
							<input type="text" name="login" placeholder="Логин" value={form.login} onChange={handleChange} />
						</div>
						{errors.password && <span className={styles.error}>{errors.password}</span>}
						<div className={styles.section__list__field}>
							<input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} />
						</div>
					</div>
					<div className={styles.section__bottom}>
						<div className={styles.section__bottom__button}>
							<a onClick={() => login()}>Войти</a>
						</div>
						<div className={styles.section__bottom__link}>
							Нет аккаунта?{' '}
							<Link to="/register">
								<ins>Зарегистрироваться</ins>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { Login }
