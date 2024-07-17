import ConsoleService from "../services/console-service/console.service";
import NotificationService from "../services/notification-service/notification.service";

export default class BusinessLayerModel {
	notificationService: NotificationService;
	consoleService: ConsoleService;
	constructor() {
		this.notificationService = new NotificationService();
		this.consoleService = new ConsoleService();
	}
}
