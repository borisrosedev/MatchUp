import fontawesomeIcon from "../../components/fontawesome-icon/fontawesome-icon";
import nav from "../../components/nav/nav";
import LocalStorageService from "../../services/local-storage-service/local-storage.service";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class HeaderContainer {
	localStorageService: LocalStorageService;
    onNavigate: OnNavigateType
	constructor(onNavigate: OnNavigateType) {
        this.onNavigate = onNavigate
		this.localStorageService = new LocalStorageService();

		const header = document.getElementById("header-layout");

		const user = this.localStorageService.getItem("user");

		const headerNav = {
			anchors: [
				{
					template: fontawesomeIcon("fa-solid fa-right-to-bracket"),
					href: "#login"
				}
			]
		};

		if (user.email) {
            console.log('user')
			headerNav.anchors.pop();
			headerNav.anchors.push({
				template: fontawesomeIcon("fa-solid fa-right-from-bracket"),
				href: "#logout"
			});

		} 
		header.innerHTML += nav(headerNav);
		
	}
}
