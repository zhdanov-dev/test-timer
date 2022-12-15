import styles from './header.module.scss';

function Header() {
	return (
		<header className={styles.container}>
			<span className={styles.container__text}>Ход торгов</span>
			<span className={styles.container__text} style={{fontWeight: '600'}}>Тестовые торги на аппарат ЛОТОС №1111111</span>
		</header>
	);
}

export default Header;