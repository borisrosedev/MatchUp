import LocalStorageService from "../../services/local-storage-service/local-storage.service";
import UsersService from "../../services/users-service/users-service";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class DashboardContainer {
	onNavigate: OnNavigateType;
	localStorageService: LocalStorageService;
	user: any;
	usersService: UsersService;
	constructor(onNavigate: OnNavigateType) {
		this.onNavigate = onNavigate;
		this.localStorageService = new LocalStorageService();
		this.usersService = new UsersService();
		this.user = this.localStorageService.getItem("user");

		if (this.user.email) {
			this.usersService.getUserByEmail(this.user.email);
		}
	}
}
