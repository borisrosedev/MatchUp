interface ButtonProps {
    id: string
    textContent: string;
    type?: 'subit' | 'reset' | 'button'
    classNames?: string
}


export default function({ id, textContent, type, classNames}: ButtonProps){
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