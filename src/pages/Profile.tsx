import { CiFaceFrown } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import styles from '../scss/pages/Profile.module.sass'
import { useManga } from '../store'

const Profile = () => {
	const purchases = useManga(state => state.purchases)
	const purchasesAmount = purchases.length

	return (
		<>
			<Header />
			<div className={styles.section}>
				<div className={styles.title}>Мои покупки</div>
				<div className={styles.list}>
					{purchasesAmount > 0 ? (
						purchases.map(manga => <Card key={manga.id} {...manga}></Card>)
					) : (
						<div className={styles.notFound}>
							<CiFaceFrown size={200} className={styles.icon}></CiFaceFrown>
							<b>У вас нет заказов</b>
							<span>Вы нищеброд?</span>
							<span>Оформите хотя бы один заказ.</span>
							<Link to={'/'} className={styles.button}>
								<img src="/icons/arrow-white.svg" alt="arrow" />
								<p>Вернуться</p>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export { Profile }
