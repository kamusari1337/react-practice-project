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
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_600_23)">
									<path
										d="M16.25 8.125C16.25 9.91797 15.668 11.5742 14.6875 12.918L19.6328 17.8672C20.1211 18.3555 20.1211 19.1484 19.6328 19.6367C19.1445 20.125 18.3516 20.125 17.8633 19.6367L12.918 14.6875C11.5742 15.6719 9.91797 16.25 8.125 16.25C3.63672 16.25 0 12.6133 0 8.125C0 3.63672 3.63672 0 8.125 0C12.6133 0 16.25 3.63672 16.25 8.125ZM8.125 13.75C8.86369 13.75 9.59514 13.6045 10.2776 13.3218C10.9601 13.0391 11.5801 12.6248 12.1025 12.1025C12.6248 11.5801 13.0391 10.9601 13.3218 10.2776C13.6045 9.59514 13.75 8.86369 13.75 8.125C13.75 7.38631 13.6045 6.65486 13.3218 5.97241C13.0391 5.28995 12.6248 4.66985 12.1025 4.14752C11.5801 3.62519 10.9601 3.21086 10.2776 2.92818C9.59514 2.6455 8.86369 2.5 8.125 2.5C7.38631 2.5 6.65486 2.6455 5.97241 2.92818C5.28995 3.21086 4.66985 3.62519 4.14752 4.14752C3.62519 4.66985 3.21086 5.28995 2.92818 5.97241C2.64549 6.65486 2.5 7.38631 2.5 8.125C2.5 8.86369 2.64549 9.59514 2.92818 10.2776C3.21086 10.9601 3.62519 11.5801 4.14752 12.1025C4.66985 12.6248 5.28995 13.0391 5.97241 13.3218C6.65486 13.6045 7.38631 13.75 8.125 13.75Z"
										fill="#4F0047"
									/>
								</g>
								<defs>
									<clipPath id="clip0_600_23">
										<rect width="20" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>

							{searchValue && <img className={styles.section__header__search_input_mark} width={20} onClick={() => setSearchValue('')} src="/icons/mark.svg" alt="mark" />}
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
