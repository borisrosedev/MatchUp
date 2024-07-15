import figure from "../figure/figure"
import paragraph from "../paragraph/paragraph"

export default function (data: any) {
	return `
            <section class="custom-message ${data.classNames ? data.classNames : ""}">
                <section>
                    ${figure(data.figure)}
                </section>
                <section>
                    ${paragraph(data.paragraph)}
                </section>
            </section>
        
        `
}
