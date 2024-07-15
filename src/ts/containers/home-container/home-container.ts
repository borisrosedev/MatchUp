import message from "../../components/message/message"
import sealed from "../../decorators/sealed"
import { OnNavigateType } from "../../types/on-navigate-type"

@sealed
export default class HomeContainer {
	onNavigate: OnNavigateType

	constructor(onNavigate: OnNavigateType) {
		this.onNavigate = onNavigate
		const homeMain = document.getElementById("home-main")
		setTimeout(() => {
			const data = {
				classNames: "home__message",
				figure: {
					src: "/assets/female-avatar.jpg",
					alt: "avatar apportant un message"
				},
				paragraph: {
					textContent:
						"Je vous invite soit à vous connecter ou inscrire, soit à en savoir un peu plus sur MatchUp en clique sur le ? "
				}
			}

			homeMain.innerHTML = ""
			homeMain.innerHTML += message(data)
		}, 3000)
	}

	onClick() {}
}
