import anchor from "../../components/anchor/anchor";
import figure from "../../components/figure/figure";
import fontawesomeIcon from "../../components/fontawesome-icon/fontawesome-icon";
import nav from "../../components/nav/nav";

export default function() {

    const titleAnchor = {
        href: "",
        template : figure({ img: { src: "/assets/logo.png", alt: "logo de l'application"}}, )
    }

    const headerNav = {
        anchors: [
            {
                template: fontawesomeIcon("fa-solid fa-right-to-bracket"),
                href: "#login"
            }
        ]
    }

     return(
        `
            <header class="header custom-header custom-header--layout">
            ${anchor(titleAnchor)}
            ${nav(headerNav)}
            </header>
        
        `
     )

}
