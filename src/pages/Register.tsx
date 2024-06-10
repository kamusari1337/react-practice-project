import { useState } from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { registerUser } from '../api'
import styles from '../scss/pages/Register.module.sass'

const Register = () => {
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
					<div className={styles.section__title}>Регистрация</div>
					<div className={styles.section__list}>
						<div className={styles.section__list__field}>
							<IoPersonSharp />
							<input type="text" placeholder="Логин" value={loginValue} onChange={e => setLoginValue(e.target.value)} />
						</div>
						<div className={styles.section__list__field}>
							<MdEmail />
							<input type="text" placeholder="Почта" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
						</div>
						<div className={styles.section__list__field}>
							<RiLockPasswordFill />
							<input type="text" placeholder="Пароль" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
						</div>
						<div className={styles.section__list__button} onClick={register}>
							<p>Зарегистрироваться</p>
						</div>
						<div className={styles.section__list__link}>
							Уже есть аккаунт? <Link to="/login">Войти</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { Register }