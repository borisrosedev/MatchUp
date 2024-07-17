export function button(d) {
    return(
        `
            <button
                id="${d.id}"
                class="button ${d.classNames ? d.classNames : ''}"
                type="${d.type ? d.type : 'button'}"
            >${d.textContent}</button>
        
        `
    )
}


