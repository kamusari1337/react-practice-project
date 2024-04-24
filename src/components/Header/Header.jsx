import styles from './Header.module.sass'

const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.container}>
					<div className={styles.title}>Mungify</div>
					<div className={styles.buttons}>
						<ul className={styles.list}>
							<li>
								<a className={styles.button} href="#">
									Вход
								</a>
							</li>
							<li>
								<a className={styles.button} href="#">
									Регистрация
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
