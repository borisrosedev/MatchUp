import homeView from "./src/ts/views/home-view/home-view";
import logView from "./src/ts/views/log-view/log-view";
import logoutView from "./src/ts/views/logout-view/logout-view";
import dashboardView from "./src/ts/views/dashboard-view/dashboard-view";
import header from "./src/ts/layout/header/header";
import notificationAside from "./src/ts/layout/notification-aside/notification-aside";
import { OnNavigateType } from "./src/ts/types/on-navigate.type";
import HomeContainer from "./src/ts/containers/home-container/home-container";
import LogContainer from "./src/ts/containers/log-container/log-container";
import LogoutContainer from "./src/ts/containers/logout-container/logout-container";
import HeaderContainer from "./src/ts/containers/header-container/header-container";
import DashboardContainer from "./src/ts/containers/dashboard-container/dashboard-container";

declare global {
	interface Window {
		onNavigate: OnNavigateType;
	}
}

window.onNavigate = (h: string) => {
	navigateToPage(h);
};

window.onpopstate = () => {
	navigateToPage(window.location.hash);
};

function navigateToPage(h: string) {
	const root = document.getElementById("root") as HTMLElement;
	root.innerHTML = "";
	root.innerHTML += header();
	new HeaderContainer(window.onNavigate);
	root.innerHTML += notificationAside();

	window.history.pushState({}, "", window.location.pathname + h)

	switch (h) {
		case "":
			root.innerHTML += homeView();
			new HomeContainer(window.onNavigate);
			break;
		case "#dashboard":
			root.innerHTML += dashboardView();
			new DashboardContainer(window.onNavigate);
			break;
		case "#logout":
			root.innerHTML += logoutView()
			new LogoutContainer(window.onNavigate)
			break;
		case "#login":
			console.log("Login Page");
			root.innerHTML += logView(true);
			new LogContainer(window.onNavigate, true);
			break;
		case "#register":
			console.log("Register Page");
			root.innerHTML += logView(false);
			new LogContainer(window.onNavigate, false);
			break;
		default:
			break;
	}
}

function router() {
	// cette fonction va être lancé au démarrage de l'application
	navigateToPage(window.location.hash);
}

export default router;
