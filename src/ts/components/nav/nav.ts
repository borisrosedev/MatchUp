import anchor from "../anchor/anchor"

export default function (id: string, anchorsList: any) {
	return `
            <nav class="custom-nav">
                ${anchorsList.map((el: any) => anchor(el))}
            </nav>
        
        `
}
