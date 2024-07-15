export default function (data: any) {
	return `
            <button
                type="${data.type ? data.type : "text"}" 
                class="${data.bulmaClassNames}
                ${data.customClassNames}"
            >
                ${data.textContent}
            </button>
        
    `
}
