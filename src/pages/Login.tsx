import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../scss/pages/Login.module.sass'
import { useUser } from '../store'

const Login = () => {
	const [loginValue, setLoginValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const { setLogin } = useUser(state => state.setLogin)
	const { setPassword } = useUser(state => state.setPassword)
	const { getUser } = useUser(state => state.getUser)

	const submitData = async e => {
		e.preventDefault()
		setLogin(loginValue)
		setPassword(passwordValue)
		getUser()
	}

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<p>Mungify</p>
					<img width={40} src="/icons/book.svg" alt="logo" />
				</div>
				<div className={styles.section}>
					<div className={styles.title}>Вход</div>
					<div className={styles.list}>
						<div className={styles.field}>
							<img src="/icons/login-icon.png" alt="login-icon" />
							<input type="text" placeholder="Логин" value={loginValue} onChange={e => setLoginValue(e.target.value)} />
						</div>
						<div className={styles.field}>
							<img src="/icons/password-icon.png" alt="password-icon" />
							<input type="text" placeholder="Пароль" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.button}>
							<a onClick={submitData}>Войти</a>
						</div>
						<div className={styles.link}>
							Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { Login }
