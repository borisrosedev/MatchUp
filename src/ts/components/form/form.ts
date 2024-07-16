import articleInput from "../article-input/article-input"
import button from "../button/button"

export default function (data: any) {
	return `
    <form class="custom-form" id="${data.formId}">
        <section class="custom-form__inputs">
            ${data.inputs.map((el: any) => articleInput(el)).join("")}
        </section>
        <section class="custom-form__buttons">
            ${data.buttons.map((el: any) => button(el)).join("")}
        </section>
    </form>
`
}
