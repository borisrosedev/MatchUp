export default function (data: any) {
	return `
            <button
                id="${data.id}"
                type="${data.type ? data.type : "button"}" 
                class="${data.bulmaClassNames} ${data.customClassNames ? data.customClassNames : ""}"
            >
                ${data.textContent}
            </button>
        
    `
}
