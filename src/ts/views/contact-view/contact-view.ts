import contactForm from "../../components/contact-components/contact-form/contact-form";

export default function () {
	return `
        <main 
            class="main contact__main"
        >
            <section                        
                class="contact__form-section"      x-data="contact"
            >
                ${contactForm()}
            </section>
        </main>
    `;
}
