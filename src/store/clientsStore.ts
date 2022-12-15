import { makeAutoObservable } from 'mobx';

class clientsDataStore {
	clients: Client[] = this.resetClientsArray();

	resetClientsArray() {
		return [
			{
				id: 1,
				productionTime: 80,
				obligations: 24,
				payment: 30,
				cost: 3700000,
			},
			{
				id: 2,
				productionTime: 90,
				obligations: 24,
				payment: 100,
				cost: 3200000,
			},
			{
				id: 3,
				productionTime: 75,
				obligations: 22,
				payment: 60,
				cost: 2800000,
			},
			{
				id: 4,
				productionTime: 120,
				obligations: 36,
				payment: 50,
				cost: 2500000,
			},
		];
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export const clientsStore = new clientsDataStore();
