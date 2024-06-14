import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookLogo } from '../components/UI/icons/Icons'
import styles from '../scss/pages/Login.module.sass'
import { useUser } from '../store'

const Login = () => {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const setLogin = useUser(state => state.setLogin)
	const setPassword = useUser(state => state.setPassword)

	const getUser = useUser(state => state.getUser)

	const login = () => {
		setLogin(form.login)
		setPassword(form.password)
		getUser()
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
						<div className={styles.section__list__field}>
							<input type="text" name="login" placeholder="Логин" value={form.login} onChange={handleChange} />
						</div>
						<div className={styles.section__list__field}>
							<input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} />
						</div>
					</div>
					<div className={styles.section__bottom}>
						<div className={styles.section__bottom__button}>
							<a onClick={login}>Войти</a>
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
