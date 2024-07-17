import Button from "../../interfaces/button.interface";


export default function({ id, textContent, type, classNames}: Button){
    return(
        `
            <button 
                id="${id}"
                class="button ${classNames ? classNames : ''}"
                type="${type ? type : 'button'}"
            >
                ${textContent}
            </button>
        
        `
    )

}
