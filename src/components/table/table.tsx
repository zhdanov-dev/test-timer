import Row from './row';
import styles from './table.module.scss';

function Table() {
	return (
		<div className={styles.container}>
			<div className={styles.table__container}>
				<div className={styles.table__text}>
					<div className={styles.head__component}>Ход</div>
					<div className={styles.head__component}>
						{'Пареметры и требования'}
					</div>
					<div className={styles.head__component}>
						{'Срок изготовления лота, дней'}
					</div>
					<div className={styles.head__component}>
						{'Гарантийные обязательства, мес'}
					</div>
					<div className={styles.head__component}>{'Условия оплаты'}</div>
					<div className={styles.head__component}>
						{'Стоимость изготовления лота, руб'}
					</div>
				</div>
				<div className={styles.table__body}>
					<Row step={true}/>
					<Row id={true} />
					<Row productionTime={true} />
					<Row obligations={true} />
					<Row payment={true} />
					<Row cost={true} />
				</div>
			</div>
		</div>
	);
}

export default Table;
