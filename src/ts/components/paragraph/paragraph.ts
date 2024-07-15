export default function (data: any) {
	return `
            <p class="custom-paragraph ${data.classNames}">${data.textContent}</p>
        
        `
}
