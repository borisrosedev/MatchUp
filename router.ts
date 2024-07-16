import homeView from "./src/ts/views/home-view/home-view"
import headerLayout from "./src/ts/layout/header-layout/header-layout"
import HomeContainer from "./src/ts/containers/home-container/home-container"
import logView from "./src/ts/views/log-view/log-view"
import LogContainer from "./src/ts/containers/log-container/log-container"

declare global {
	interface Window {
		onNavigate: (h: string) => void
	}
}

window.onNavigate = (h: string) => {
	navigateToPage(h)
}

window.onpopstate = function () {
	navigateToPage(window.location.hash)
}

export function navigateToPage(h: string) {
	window.history.pushState({}, "", window.location.pathname + h)
	const app = document.getElementById("app") as HTMLElement

	app.innerHTML = ""
	app.innerHTML += headerLayout()

	switch (h) {
		case "":
			console.log("home page")
			app.innerHTML += homeView()
			new HomeContainer(window.onNavigate)
			break
		case "#login":
			console.log("login page")
			app.innerHTML += logView(true)
			new LogContainer(window.onNavigate)
			break
		case "#register":
			console.log("register page")
			app.innerHTML += logView(false)
			new LogContainer(window.onNavigate, false)
			break
		case "#dashboard":
			console.log("dashboard page")
			break
		case "#settings":
			console.log("settings page")
			break
		case "#pretenders":
			console.log("pretenders page")
			break
		case "#matchers":
			console.log("matchers page")
			break
		case "#conversations":
			console.log("conversations page")
			break
		default:
			console.log("not-found page")
			break
	}
}

export default function () {
	navigateToPage(window.location.hash)
}