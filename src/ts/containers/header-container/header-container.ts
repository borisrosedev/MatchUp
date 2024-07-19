import fontawesomeIcon from "../../components/fontawesome-icon/fontawesome-icon";
import nav from "../../components/nav/nav";
import BusinessLayerModel from "../../models/business-layer-model";
import LocalStorageService from "../../services/local-storage-service/local-storage.service";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class HeaderContainer extends BusinessLayerModel {
	localStorageService: LocalStorageService;
	onNavigate: OnNavigateType;
	constructor(onNavigate: OnNavigateType) {
		super()
		this.onNavigate = onNavigate;
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
			console.log("user");
			headerNav.anchors.pop();
			headerNav.anchors.push(
				{
					template: fontawesomeIcon("fa-regular fa-comments"),
					href: "#conversations"
				},
				{
					template: fontawesomeIcon("fa-solid fa-fire-flame-curved"),
					href: "#matches"
				},	
				{
					template: fontawesomeIcon("fa-solid fa-users-viewfinder"),
					href: "#pretenders"
				},	
				{
					template: fontawesomeIcon("fa-solid fa-gear"),
					href: "#settings"
				},
				{
					template: fontawesomeIcon("fa-solid fa-house-user"),
					href: "#dashboard"
				},
				{
				template: fontawesomeIcon("fa-solid fa-right-from-bracket"),
				href: "#logout"
			});
		} else {
			if(window.location.hash === "#dashbaord"){
				this.onNavigate("404")
			}
		}
		header.innerHTML += nav(headerNav);
	}
}
