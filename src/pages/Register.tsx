import { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { IoPersonSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { ConfirmModal } from '../components/ConfirmModal'
import styles from '../scss/pages/Register.module.sass'

const Register = () => {
	const [form, setForm] = useState({
		login: '',
		email: '',
		password: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const [showPassword, setShowPassword] = useState(false)
	const [showModal, setShowModal] = useState(false)

	const register = async () => {
		setShowModal(true)
	}

	return (
		<>
			{showModal && <ConfirmModal setModal={() => setShowModal(false)} />}
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<p>Mungify</p>
					<img width={40} src="/icons/book.svg" alt="logo" />
				</div>
				<div className={styles.section}>
					<div className={styles.section__title}>Регистрация</div>
					<div className={styles.section__list}>
						<div className={styles.section__list__field}>
							<IoPersonSharp size={20} />
							<input type="text" name="login" placeholder="Логин" value={form.login} onChange={handleChange} />
						</div>
						<div className={styles.section__list__field}>
							<MdEmail size={20} />
							<input type="text" name="email" placeholder="Почта" value={form.email} onChange={handleChange} />
						</div>
						<div className={styles.section__list__field}>
							<RiLockPasswordFill size={20} />
							<input type={showPassword ? 'text' : 'password'} name="password" placeholder="Пароль" value={form.password} onChange={handleChange} />
							{showPassword ? <HiEyeOff className={styles.field__eye} size={20} onClick={() => setShowPassword(false)} /> : <HiEye className={styles.field__eye} size={20} onClick={() => setShowPassword(true)} />}
						</div>
					</div>
					<div className={styles.section__bottom}>
						<div className={styles.section__bottom__button} onClick={register}>
							<p>Зарегистрироваться</p>
						</div>
						<div className={styles.section__bottom__link}>
							Уже есть аккаунт?{' '}
							<Link to="/login">
								<ins>Войти</ins>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { Register }
