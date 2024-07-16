export default function (data: any) {
	return `
        <article class="article-input">
            <label for="${data.id}"></label>
            <input 
                id="${data.id}" 
                placeholder="${data.placeholder}"
                type="${data.type ? data.type : "text"}"
            />
            <aside 
                class="error" 
                id="${data.id}-error">
            </aside>
        </article>
    
    `
}
