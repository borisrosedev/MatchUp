export default function (data: any) {
	return `
            <span 
            class="custom-span" 
            aria-label="${data.ariaLabel}"
            >
                ${data.textContent}
            </span>
        
    `
}
