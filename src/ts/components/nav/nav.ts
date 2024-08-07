import Anchor from "../../interfaces/anchor.interface";
import anchor from "../anchor/anchor";

interface NavProps {
	anchors: Anchor[];
}

export default function (d: NavProps) {
	return `
            <nav class="nav" id="header-nav">
                ${d.anchors.map((el: any) => anchor(el)).join("")}
            </nav>
        
        `;
}
