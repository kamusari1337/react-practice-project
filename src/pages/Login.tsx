import { useState } from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styles from '../scss/pages/Login.module.sass'
import { useUser } from '../store'

const Login = () => {
	const [loginValue, setLoginValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const setLogin = useUser(state => state.setLogin)
	const setPassword = useUser(state => state.setPassword)

	const getUser = useUser(state => state.getUser)

	const login = () => {
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
					<div className={styles.section__title}>Вход</div>
					<div className={styles.section__list}>
						<div className={styles.section__list__field}>
							<IoPersonSharp />
							<input type="text" placeholder="Логин" value={loginValue} onChange={e => setLoginValue(e.target.value)} />
						</div>
						<div className={styles.section__list__field}>
							<RiLockPasswordFill />
							<input type={showPassword ? 'text' : 'password'} placeholder="Пароль" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} onMouseEnter={() => setShowPassword(true)} onMouseLeave={() => setShowPassword(false)} />
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
