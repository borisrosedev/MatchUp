import { HomeContainer } from "./src/js/containers/home-container/home-container.js";
import { homePage } from "./src/js/pages/home-page/home-page.js";
import { notFoundPage } from "./src/js/pages/not-found-page/not-found.js";


window.onpopstate = function urlStateHandler () {
    navigateToPage(window.location.hash)
}  

function navigateToPage(h){
    const root = document.getElementById('root')
    root.innerHTML = ""
    
    switch(h){
        case "":
            console.log('🟢 Je suis sur la page racine')
            root.innerHTML += homePage()
            new HomeContainer()
            break;
        default:
            console.log('404: La page à laquelle vous tentez d\'accéder n\'existe pas')
            root.innerHTML += notFoundPage()
            break;
    }


}



export function router(){
    const hash = window.location.hash
    navigateToPage(hash)

}