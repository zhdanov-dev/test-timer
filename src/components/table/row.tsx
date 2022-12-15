import { observer } from 'mobx-react-lite';
import { clientsStore } from '../../store/clientsStore';
import { stepStore } from '../../store/stepStore';
import { timeStore } from '../../store/timeStore';
import styles from './table.module.scss';

type RowProps = {
	step?: boolean;
	id?: boolean;
	productionTime?: boolean;
	obligations?: boolean;
	payment?: boolean;
	cost?: boolean;
};

function Row({
	step,
	id,
	productionTime,
	obligations,
	payment,
	cost,
}: RowProps) {
	return (
		<>
			{stepStore.step === 1 && step && (
				<>
					<div className={styles.head__timer}>
						<span>{timeStore.minutes}</span>
						<span>{':'}</span>
						<span>{timeStore.seconds}</span>
					</div>
					<div></div>
					<div></div>
					<div></div>
				</>
			)}
			{stepStore.step === 2 && step && (
				<>
					<div></div>
					<div className={styles.head__timer}>
						<span>{timeStore.minutes}</span>
						<span>{':'}</span>
						<span>{timeStore.seconds}</span>
					</div>
					<div></div>
					<div></div>
				</>
			)}
			{stepStore.step === 3 && step && (
				<>
					<div></div>
					<div></div>
					<div className={styles.head__timer}>
						<span>{timeStore.minutes}</span>
						<span>{':'}</span>
						<span>{timeStore.seconds}</span>
					</div>
					<div></div>
				</>
			)}
			{stepStore.step === 4 && step && (
				<>
					<div></div>
					<div></div>
					<div></div>
					<div className={styles.head__timer}>
						<span>{timeStore.minutes}</span>
						<span>{':'}</span>
						<span>{timeStore.seconds}</span>
					</div>
				</>
			)}
			{id &&
				clientsStore.clients.map((client: Client, key: number) => {
					return (
						<div
							className={styles.head__component}
							key={key}
						>{`Участник №${client.id}`}</div>
					);
				})}
			{productionTime &&
				clientsStore.clients.map((client: Client, key: number) => {
					return (
						<div className={styles.head__component} key={key}>
							{client.productionTime}
						</div>
					);
				})}
			{obligations &&
				clientsStore.clients.map((client: Client, key: number) => {
					return (
						<div className={styles.head__component} key={key}>
							{client.obligations}
						</div>
					);
				})}
			{payment &&
				clientsStore.clients.map((client: Client, key: number) => {
					return (
						<div className={styles.head__component} key={key}>
							{client.payment}%
						</div>
					);
				})}
			{cost &&
				clientsStore.clients.map((client: Client, key: number) => {
					return (
						<div className={styles.head__component} key={key}>
							{client.cost}
						</div>
					);
				})}
		</>
	);
}

export default observer(Row);
