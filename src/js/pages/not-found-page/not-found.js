import { paragraph } from "../../components/paragraph/paragraph.js"

export function notFoundPage () {
    return(
        `
            <main class="custom-main not-found__main">
                ${paragraph({
                    classNames: "red",
                    content: "404 | La page que vous cherchez n'existe pas"
                })}
            </main>
        
        `
    )
}