export default function (data: any) {
	return `
            <figure class="custom-figure">
                <img src=${data.src} alt="${data.alt}" />
            </figure>
        
        `
}
