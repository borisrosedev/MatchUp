import homeView from "./src/ts/views/home-view/home-view"
import logView from "./src/ts/views/log-view/log-view"
import header from "./src/ts/layout/header/header";
import notificationAside from "./src/ts/layout/notification-aside/notification-aside"
import {onNavigateType} from "./src/ts/types/on-navigate.type"
import HomeContainer from "./src/ts/containers/home-container/home-container";
import LogContainer from "./src/ts/containers/log-container/log-container"

declare global {
    interface Window {
        onNavigate: onNavigateType
    }
}


window.onNavigate = (h: string) => {
    navigateToPage(h)
}

window.onpopstate = () => {
    navigateToPage(window.location.hash)
}

function navigateToPage(h: string){
    const root = document.getElementById('root') as HTMLElement
    root.innerHTML = "";
    root.innerHTML += header()
    root.innerHTML += notificationAside()
    switch(h){
        case "":
            root.innerHTML += homeView()
            new HomeContainer(window.onNavigate)
            break
        case "#login":
            console.log('Login Page')
            root.innerHTML += logView(true)
            new LogContainer(window.onNavigate, true)
            break;
        case "#register":
            console.log('Register Page')
            root.innerHTML += logView(false)
            new LogContainer(window.onNavigate, false)
            break;
        default:
            break;
    }
}

function router (){
    // cette fonction va être lancé au démarrage de l'application
   navigateToPage(window.location.hash)
}

export default router
