import { Header } from '../components/Header'
import { SadFace } from '../components/UI/icons/Faces'
import NotFoundSection from '../components/UI/NotFoundSection'
import styles from '../scss/pages/Profile.module.sass'
import { useManga } from '../store'
import { useEffect } from 'react'
import { PurchasedCard } from '../components/PurchasedCard.tsx'

const Profile = () => {
	const purchases = useManga(state => state.purchases)
	const purchasesAmount = purchases.length
	const getPurchased = useManga(state => state.getPurchased)

	useEffect(() => {
		getPurchased()
	}, [getPurchased])

	return (
		<>
			<Header />
			<div className={styles.section}>
				<div className={styles.section__title}>Мои покупки</div>
				<div className={styles.section__list}>
					{purchasesAmount <= 0 ? (
						<NotFoundSection message1="У вас нет заказов" message2="Оформите хотя бы один заказ..." face={<SadFace />} />
					) : (
						purchases.map((purchase, index) => (
							<div key={index} className={styles.section__list__purchases}>
								<div className={styles.purchase__info}>
									<p>
										Код заказа:
										<b> {purchase.code.slice(-4)}</b>
									</p>
									<div className={styles.purchase__extra_info}>
										<p>
											Книг куплено: <b>{purchase.content.map(item => item.inCart).reduce((a, b) => a + b, 0)}</b>
										</p>
										<p>
											Итого:<b> {purchase.sum} руб.</b>
										</p>
									</div>
								</div>
								<div className={styles.purchase__content}>
									{purchase.content.map(item => (
										<PurchasedCard key={'purchase' + item.id + purchase.code} {...item} />
									))}
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</>
	)
}

export { Profile }
