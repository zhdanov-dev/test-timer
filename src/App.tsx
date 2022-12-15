import './App.scss';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Header from './components/header/header';
import Table from './components/table/table';
import { stepStore } from './store/stepStore';
import { timeStore } from './store/timeStore';
import { wsStore } from './store/wsStore';

function App() {
	useEffect(() => {
		wsStore.ws.onmessage = message => {
			const mess = JSON.parse(message.data);
			if (mess.changeStep) stepStore.changeStep(mess.step);
			else {
				timeStore.changeMinutes(mess.minutes);
				timeStore.changeSeconds(mess.seconds);
        stepStore.changeStep(mess.step);
			}
      console.log(stepStore.step);
		};
	}, []);

	async function sendMessage() {
		wsStore.ws.send(
			JSON.stringify({
				type: 'activateTimer',
			})
		);
	}

	return (
		<>
			<Header />
			<Table />
			<button className='button__start' onClick={sendMessage}>Начать торги</button>
		</>
	);
}

export default observer(App);
