import NavQuestion from "../../interfaces/nav-question.interface";
import anchor from "../anchor/anchor";
import paragraph from "../paragraph/paragraph";

export default function(q: NavQuestion){
    return(
        `
            <section class="nav-question">  
                ${paragraph({
                    textContent: q.questionContent + " " + q.clickInvitation
                })}
                
                ${anchor({
                    href: q.href,
                    textContent: q.anchorContent
                })}
            </section>
        
        `
    )
}
