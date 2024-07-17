import paragraph from "../../components/paragraph/paragraph";

function homeView(){
    return(
        `
            <main class="main home__main">
                ${paragraph({ textContent : 'Je suis sur la page Home'})}
            </main>
        
        `
    )
}

export default homeView
