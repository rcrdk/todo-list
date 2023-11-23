import styles from './styles/Header.module.css'

import todoBrand from '../assets/brand.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<img src={todoBrand} alt="ToDo" className={styles.brand} />
		</header>
	)
}