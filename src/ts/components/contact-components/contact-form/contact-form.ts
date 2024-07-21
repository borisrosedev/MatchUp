import contactButtons from "../contact-buttons/contact-buttons";
import contactInput from "../contact-input/contact-input";
import contactTextarea from "../contact-textarea/contact-textarea";


export default function() {
    return `
        <form class="contact-form" 
        x-on:submit.prevent="submitContactForm">
            <section class="contact-form__inputs">
                <template x-for="(field, i) in $store.contact.form.fields">   
                    <div aria-label="conteneur de l'input"> 
                        ${contactTextarea()}
                        ${contactInput()}
                    </div>
                </template>
            </section>
            <section class="contact-form__buttons">
                ${contactButtons()}
            </section>
        </form>
    `;
}
