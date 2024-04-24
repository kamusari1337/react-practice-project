import Header from '../../components/Header/Header'
import PopularSection from '../../components/PopularSection/PopularSection'
import SearchSection from '../../components/SearchSection/SearchSection'
import styles from './Home.module.sass'

const Home = () => {
	return (
		<>
			<Header></Header>
			<div className={styles.section}>
				<PopularSection></PopularSection>
				<SearchSection></SearchSection>
			</div>
		</>
	)
}

export default Home
