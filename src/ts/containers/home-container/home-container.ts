import button from "../../components/button/button";
import figure from "../../components/figure/figure";
import ContainerModel from "../../models/container-model";
import LocalStorageService from "../../services/local-storage-service/local-storage.service";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class HomeContainer extends ContainerModel {
	homeMain: HTMLElement
	localStorageService: LocalStorageService
	isLoggedIn: boolean
	constructor(onNavigate: OnNavigateType) {
		super(onNavigate);
		this.localStorageService = new LocalStorageService()

		const user = this.localStorageService.getItem("user")

		if(user.email){
			this.isLoggedIn = true
			
			
		} else {
			this.isLoggedIn = false
		}

		this.homeMain = document.getElementById("home-main")
		this.onInit()
	}

	onInit(){

		if(!this.isLoggedIn){
			this.homeMain.innerHTML += figure({
				img: {
					src: "/assets/logo.png",
					alt: "logo de l'application MatchUp"
				},
				classNames: "home__logo"
			})
	
			setTimeout(() => {
				this.homeMain.innerHTML = button({
					id: "home-login-button",
					textContent: "Se connecter",
					type: "button",
					classNames: "home__button"
				})

				
			}, 2000)

		} else {
			setTimeout(() => {
				this.homeMain.innerHTML = button({
					id: "home-dashboard-button",
					textContent: "Accéder à votre dashboard",
					type: "button",
					classNames: "home__button"
				})

				const dashboardButton = document.getElementById("home-dashboard-button")

				dashboardButton.addEventListener("click", (e) => this.onClick("home-dashboard-button"))
			}, 2000)
		}
	}

	onClick(id: string){
		if(id == "home-login-button"){
			this.onNavigate("#login")
		} 

		if(id == "home-dashboard-button"){
			this.onNavigate("#dashboard")
		}
	}


}
