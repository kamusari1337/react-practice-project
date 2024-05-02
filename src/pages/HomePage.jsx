import Header from '../components/Header'
import PopularSection from '../components/PopularSection'
import SearchSection from '../components/SearchSection'
import styles from '../scss/pages/HomePage.module.sass'

const HomePage = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<PopularSection />
				<SearchSection />
			</div>
		</>
	)
}

export default HomePage
