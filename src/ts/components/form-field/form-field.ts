import Field from "../../interfaces/field.interface";
export default function(d: Field): string{
    return(
        `
            <article class="field ${d.classNames ? d.classNames : ''}">
                <label for="${d.id}"></label>
                <input 
                    id="${d.id}" 
                    type="${d.type ? d.type : 'text'}"
                    placeholder="${d.placeholder}"
                />
            </article>
        
        `
    )
}