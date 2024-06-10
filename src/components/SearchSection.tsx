import { useState } from 'react'
import styles from '../scss/components/SearchSection.module.sass'
import { useManga } from '../store.js'
import { Card } from './Card.js'

const SearchSection = () => {
	const mangas = useManga(state => state.mangas)

	const [searchValue, setSearchValue] = useState('')
	const filteredArray = mangas ? mangas.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())) : []

	return (
		<>
			<div className={styles.section}>
				<div className={styles.section__header}>
					<p className={styles.section__header__title}>{searchValue ? `Результаты поиска: ${searchValue}` : 'Все книги'}</p>
					<div className={styles.section__header__search}>
						<div className={styles.section__header__search_input}>
							<img src="/icons/search.svg" alt="search-svg" />
							{searchValue && <img className={styles.section__header__search_input_mark} onClick={() => setSearchValue('')} src="/icons/mark.svg" alt="" />}
							<input onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder="Поиск..." />
						</div>
					</div>
				</div>
				<div className={styles.section__list}>
					{filteredArray.length ? (
						filteredArray.map(manga => <Card key={manga.id} {...manga} />)
					) : (
						<p className={styles.section__list__notFound}>
							Ничего не найдено по запросу <b>"{searchValue}"</b>
						</p>
					)}
				</div>
			</div>
		</>
	)
}

export { SearchSection }
