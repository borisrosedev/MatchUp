import contactButtons from "../contact-buttons/contact-buttons";
import contactFields from "../contact-fields/contact-fields";

export default function() {
    return `
        <form class="contact-form">
            <section class="contact-form__inputs">
                ${contactFields()}
            </section>
            <section class="contact-form__buttons">
                ${contactButtons()}
            </section>
        </form>
    `;
}
