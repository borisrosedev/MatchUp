import Anchor from "../../interfaces/anchor.interface";


export default function(d: Anchor){
    return(
        `
            <a 
                href="${d.href}"
            >
                ${d.template ? d.template : d.textContent}
            </a>
        
        `
    )
}
