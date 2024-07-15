export default function (data: any) {
	return `
            <header class="custom-title">
                ${
									data.type == "h1"
										? `<h1>${data.textContent}</h1>`
										: data.type == "h2"
											? `<h2>${data.textContent}</h2>`
											: data.type == "h3"
												? `<h3>${data.textContent}</h3>`
												: data.type == "h4"
													? `<h4>${data.textContent}</h4>`
													: data.type == "h5"
														? `<h5>${data.textContent}</h5>`
														: data.type == "h6"
															? `<h6>${data.textContent}</h6>`
															: "<h1>${data.textContent}</h1>"
								}
            </header>
        
        `
}
