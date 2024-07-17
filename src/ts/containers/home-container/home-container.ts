import ContainerModel from "../../models/container-model";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class HomeContainer extends ContainerModel {
	constructor(onNavigate: OnNavigateType) {
		super(onNavigate);
	}
}
