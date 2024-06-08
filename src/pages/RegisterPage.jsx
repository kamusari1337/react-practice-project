import { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../api'
import styles from '../scss/pages/RegisterPage.module.sass'

const RegisterPage = () => {
	const [loginValue, setLoginValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const register = async () => {
		window.alert('Регистрация')
		await registerUser(loginValue, passwordValue, emailValue)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<p>Mungify</p>
					<img width={40} src="/icons/book.svg" alt="logo" />
				</div>
				<div className={styles.section}>
					<div className={styles.title}>Регистрация</div>
					<div className={styles.list}>
						<div className={styles.field}>
							<img src="/icons/login-icon.png" alt="login-icon" />
							<input type="text" placeholder="Логин" value={loginValue} onChange={e => setLoginValue(e.target.value)} />
						</div>
						<div className={styles.field}>
							<img src="/icons/email-icon.png" alt="email-icon" style={{ width: '20px' }} />
							<input type="text" placeholder="Почта" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
						</div>
						<div className={styles.field}>
							<img src="/icons/password-icon.png" alt="password-icon" />
							<input type="text" placeholder="Пароль" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
						</div>
						<div className={styles.button} onClick={register}>
							<p>Зарегистрироваться</p>
						</div>
						<div className={styles.link}>
							Уже есть аккаунт? <Link to="/login">Войти</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RegisterPage
