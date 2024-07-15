import anchor from "../../components/anchor/anchor"
import figure from "../../components/figure/figure"
import icon from "../../components/icon/icon"
import nav from "../../components/nav/nav"

export default function () {
	const titleAnchor = {
		template: figure({
			src: "/assets/match-up-logo.png",
			alt: "logo de MatchUp"
		}),
		href: ""
	}

	const navAnchors = [
		{
			href: "#story",
			template: icon({
				classNames: "fa-solid fa-question"
			})
		},
		{
			href: "#login",
			template: icon({
				classNames: "fa-solid fa-right-to-bracket"
			})
		}
	]

	return `
            <header class="header-layout">
                ${anchor(titleAnchor)}
				${nav("app-nav", navAnchors)}
            </header>
        
        `
}
