import paragraph from "../../components/paragraph/paragraph";

export default function(){
    return(
        `
            <main class="main logout__main">
                ${paragraph({
                    textContent: 'Au revoir et À bientôt'
                })}
            </main>
        
        `
    )
}
