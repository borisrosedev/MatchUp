import paragraph from "../../components/paragraph/paragraph";

export default function () {
	return `
            <main class="main dashboard__main">
                ${paragraph({
									textContent: "Vous êtes sur le Dashboard"
								})}
            </main>
        
        `;
}
