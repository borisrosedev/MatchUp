import title from "../../components/title/title"
import CustomTitle from "../../interfaces/custom-title.interface"

export default function () {
	const dataTitle: Required<CustomTitle> = {
		type: "h1",
		textContent: "Bienvenue sur MatchUp"
	}
	return `
            <main class="custom-main home__main" id="home-main">
                ${title(dataTitle)}
            </main>
        
        `
}
