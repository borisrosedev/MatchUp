export default function (data: any) {
	return `
            <a href="${data.href}" class="custom-anchor ${data.classNames ? data.classNames : ""}">
                ${data.template ? data.template : data.textContent}
            </a>
        
        `
}
