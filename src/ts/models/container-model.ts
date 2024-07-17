import { OnNavigateType } from "../types/on-navigate.type";
import BusinessLayerModel from "./business-layer-model";

export default class ContainerModel extends BusinessLayerModel {
	onNavigate: OnNavigateType;
	constructor(onNavitate: OnNavigateType) {
		super();
		this.onNavigate = onNavitate;
	}
}
