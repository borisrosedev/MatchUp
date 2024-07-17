import anchor from "../../components/anchor/anchor";
import figure from "../../components/figure/figure";
import fontawesomeIcon from "../../components/fontawesome-icon/fontawesome-icon";
import nav from "../../components/nav/nav";

export default function () {
	const titleAnchor = {
		href: "",
		template: figure({
			img: { src: "/assets/logo.png", alt: "logo de l'application" }
		})
	};

	return `
            <header class="header custom-header custom-header--layout" id="header-layout">
            ${anchor(titleAnchor)}
     
            </header>
        
        `;
}
