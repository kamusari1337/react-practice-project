import { Link } from 'react-router-dom'
import styles from '../scss/pages/RegisterPage.module.sass'

const RegisterPage = () => {
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
							<input type="text" placeholder="Логин" />
						</div>
						<div className={styles.field}>
							<img src="/icons/password-icon.png" alt="password-icon" />
							<input type="text" placeholder="Пароль" />
						</div>
						<div className={styles.field}>
							<img src="/icons/password-icon.png" alt="password-icon" />
							<input type="text" placeholder="Подтвердите пароль" />
						</div>
						<div className={styles.button}>
							<a href="#">Зарегистрироваться</a>
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
