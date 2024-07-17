import paragraph from "../../components/paragraph/paragraph";

function logView(){
    return(
        `
            <main class="main log__main">
                ${paragraph({ textContent : 'Je suis sur la page Log'})}
            </main>
        
        `
    )
}

export default logView
