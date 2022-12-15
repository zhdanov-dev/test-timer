const ws = require('ws');
const { v4 } = require('uuid');

const wss = new ws.Server({ port: 5000 });
const clients = {};

let step = 1;
let timer = 120;
let minutes = Math.floor(timer / 60)
	.toString()
	.padStart(2, '0');
let seconds = (timer - minutes * 60).toString().padStart(2, '0');

wss.on('connection', ws => {
	const id = v4();
	clients[id] = ws;
	console.log(`Client ${id} has been connected!`);
	for (const id in clients) {
		clients[id].send(JSON.stringify({ minutes: minutes, seconds: seconds, step: step }));
	}

	ws.on('message', message => {
		const mess = JSON.parse(message);
		if (mess.type === 'activateTimer') activateTimer();

		function activateTimer() {
			setInterval(() => {
				if (timer > 0) timer = timer - 1;
				else {
					timer = 120;
					step === 4 ? (step = 1) : (step = step + 1);
					for (const id in clients) {
						clients[id].send(JSON.stringify({ changeStep: true, step: step }));
					}
				}
				minutes = Math.floor(timer / 60)
					.toString()
					.padStart(2, '0');
				seconds = (timer - minutes * 60).toString().padStart(2, '0');
				for (const id in clients) {
					clients[id].send(
						JSON.stringify({ minutes: minutes, seconds: seconds, step: step })
					);
				}
			}, 1000);
		}
	});

	ws.on('close', () => {
		delete clients[id];
		console.log(`Client ${id} has been disconected!`);
	});
});
