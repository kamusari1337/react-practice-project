import { useMemo, useState } from 'react'
import styles from '../scss/components/SearchSection.module.sass'
import { useManga } from '../store.js'
import { Card } from './Card.js'
import { SearchIcon } from './UI/icons/Icons.tsx'
import { Mark } from './UI/Buttons.tsx'

const SearchSection = () => {
	const mangas = useManga(state => state.mangas)
	const [searchValue, setSearchValue] = useState('')

	const filteredArray = useMemo(() => (mangas ? mangas.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())) : []), [mangas, searchValue])

	return (
		<>
			<div className={styles.section}>
				<div className={styles.section__header}>
					<p className={styles.section__header__title}>
						{searchValue ? (
							<>
								Результаты поиска: <b>"{searchValue}"</b>
							</>
						) : (
							'Все книги'
						)}
					</p>
					<div className={styles.section__header__search}>
						<div className={styles.section__header__search_input}>
							<SearchIcon />
							{searchValue && <Mark className={styles.section__header__search_input_mark} onClick={() => setSearchValue('')} />}
							<input onChange={e => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder="Поиск..." />
						</div>
					</div>
				</div>
				<div className={styles.section__list}>
					{filteredArray.length ? (
						filteredArray.map(item => <Card key={'main' + item.id} {...item} />)
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
