import { makeAutoObservable } from 'mobx';

class timeDataStore {
	minutes: number = 0;
	seconds: number = 0;

	changeMinutes(minutes: number) {
		this.minutes = minutes;
	}

	changeSeconds(seconds: number) {
		this.seconds = seconds;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export const timeStore = new timeDataStore();
