import homeView from "./src/ts/views/home-view/home-view"


function navigateToPage(h: string){
    const root = document.getElementById('root') as HTMLElement
    switch(h){
        case "":
            root.innerHTML = homeView()
            break
        default:
            break;
    }
}

function router (){
    // cette fonction va être lancé au démarrage de l'application
   navigateToPage(window.location.hash)
}

export default router
