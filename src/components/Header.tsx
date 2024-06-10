import { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa'
import { IoMdExit } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styles from '../scss/components/Header.module.sass'
import { useManga } from '../store'
import { Drawer } from './Drawer'

const Header = () => {
	const cartValue = useManga(state => state.cartValue)
	const [cartOpened, setCartOpened] = useState(false)

	return (
		<>
			{cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
			<div className={styles.header}>
				<Link to={'/'} className={styles.header__title}>
					<p>Mangify</p>
					<img width={40} src="/icons/book.svg" alt="" />
				</Link>
				<ul className={styles.header__list}>
					<li className={styles.header__list__button} onClick={() => setCartOpened(value => !value)}>
						<BsCart2 size={18} className="icon" />
						<p>{cartValue} руб.</p>
					</li>
					<li>
						<Link to={'/favorites'} className={styles.header__list__button}>
							<FaRegHeart size={18} className="icon" />
							<p>Закладки</p>
						</Link>
					</li>
					<li>
						<Link to={'/profile'} className={styles.header__list__button}>
							<FaRegUserCircle size={18} className="icon" />
							<p>Профиль</p>
						</Link>
					</li>
					<li>
						<Link to={'/login'} className={styles.header__list__button}>
							<IoMdExit />
							<p>Выход</p>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export { Header }
