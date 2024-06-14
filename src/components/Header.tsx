import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../scss/components/Header.module.sass'
import { useManga } from '../store'
import { Drawer } from './Drawer'
import { BookLogo, CartIcon, ExitIcon, HeartIcon, UserIcon } from './UI/icons/Icons'

const Header = () => {
	const cartValue = useManga(state => state.cartValue)
	const [cartOpened, setCartOpened] = useState(false)

	return (
		<>
			{cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
			<div className={styles.header}>
				<Link to={'/'} className={styles.header__title}>
					<p>Mangify</p>
					<BookLogo />
				</Link>
				<ul className={styles.header__list}>
					<li className={styles.header__list__button} onClick={() => setCartOpened(value => !value)}>
						<CartIcon />
						<p>{cartValue} руб.</p>
					</li>
					<li>
						<Link to={'/favorites'} className={styles.header__list__button}>
							<HeartIcon />
							<p>Закладки</p>
						</Link>
					</li>
					<li>
						<Link to={'/profile'} className={styles.header__list__button}>
							<UserIcon />
							<p>Профиль</p>
						</Link>
					</li>
					<li>
						<Link to={'/login'} className={styles.header__list__button}>
							<ExitIcon />
							<p>Выход</p>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export { Header }
