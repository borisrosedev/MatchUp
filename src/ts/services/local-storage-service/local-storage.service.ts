import BusinessLayerServiceModel from "../../models/business-layer-model";

export default class LocalStorageService extends BusinessLayerServiceModel {
	constructor() {
		super();
	}
	getItem(k: string) {
		const item = localStorage.getItem(k);
		if (item) {
			return JSON.parse(item);
		} else {
			return "item inexistant";
		}
	}

	setItem(k: string, val: any) {
		if (this.getItem(k)) {
			localStorage.removeItem(k);
		}
		localStorage.setItem(k, JSON.stringify(val));
	}
}
