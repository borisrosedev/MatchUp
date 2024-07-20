import contactForm from "../../components/contact-components/contact-form/contact-form";

export default function(){
    return`
        <main class="main contact__main" x-data>
            <section contact__form-section>
                ${contactForm()}
            </section>
        </main>
    `
    
}
