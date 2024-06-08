import { useState } from 'react'
import styles from '../scss/components/SearchSection.module.sass'
import { useManga } from '../store.js'
import Card from './Card'

const SearchSection = () => {
	const [searchValue, setSearchValue] = useState('')
	const mangas = useManga(state => state.mangas)

	const onChangeSearchInput = e => {
		setSearchValue(e.target.value)
	}

	const filteredArray = mangas ? mangas.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())) : []

	return (
		<>
			<div className={styles.section}>
				<div className={styles.header}>
					<p className={styles.title}>{searchValue ? `Результаты поиска: ${searchValue}` : 'Все книги'}</p>
					<div className={styles.search}>
						<div className={styles.searchInput}>
							<img src="/icons/search.svg" alt="search-svg" />
							{searchValue && <img className={styles.mark} onClick={() => setSearchValue('')} src="/icons/mark.svg" alt="" />}
							<input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
						</div>
					</div>
				</div>
				<div className={styles.list}>
					{filteredArray.length ? (
						filteredArray.map(card => <Card key={card.title + card.id} {...card} />)
					) : (
						<p className={styles.notFound}>
							Ничего не найдено по запросу <b>"{searchValue}"</b>
						</p>
					)}
				</div>
			</div>
		</>
	)
}

export default SearchSection
