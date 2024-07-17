import { button } from "../../components/button/button.js";

export function homePage () {
    return(
        `
            <main class="custom-main home__main">
                <h1>Home Page</h1>
                <section>
                ${button({
                    id: "home-login-button",
                    textContent: 'Se connecter'
                })}
                </section>
            </main>
        
        `
    )
}