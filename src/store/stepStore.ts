import { makeAutoObservable } from 'mobx';

class stepDataStore {
	step: number = 1;

	changeStep(step: number) {
		this.step = step;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export const stepStore = new stepDataStore();
