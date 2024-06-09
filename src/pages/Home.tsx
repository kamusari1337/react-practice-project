import { Header } from '../components/Header'
import { PopularSection } from '../components/PopularSection'
import { SearchSection } from '../components/SearchSection'
import styles from '../scss/pages/Home.module.sass'

const Home = () => {
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

export { Home }
