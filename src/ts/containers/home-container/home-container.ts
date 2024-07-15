import sealed from "../../decorators/sealed"
import { OnNavigateType } from "../../types/on-navigate-type"

@sealed
export default class HomeContainer {
	onNavigate: OnNavigateType

	constructor(onNavigate: OnNavigateType) {
		this.onNavigate = onNavigate
	}

	onClick() {}
}
