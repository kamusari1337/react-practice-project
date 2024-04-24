import styles from './Login.module.sass'

const Login = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>Mungify</div>
				<div className={styles.section}>
					<div className={styles.title}>Вход</div>
					<div className={styles.list}>
						<div className={styles.field}>
							<img src="/icons/login-icon.png" alt="login-icon" />
							<input type="text" placeholder="Логин" />
						</div>
						<div className={styles.field}>
							<img src="/icons/password-icon.png" alt="password-icon" />
							<input type="text" placeholder="Пароль" />
						</div>
						<div className={styles.button}>
							<a href="#">Войти</a>
						</div>
						<div className={styles.link}>
							Нет аккаунта? <a href="#">Зарегистрироваться</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
