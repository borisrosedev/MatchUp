import form from "../../components/form/form"
import CustomButton from "../../interfaces/custom-button.interface"

export default function (isLoggingIn: boolean) {
	const question = (isDoingIt: boolean) => {
		if (isDoingIt) {
			return `
                <p>Pas encore inscrit(e) ? - Cliquez <a href="#register">ici</a></p>
            `
		} else {
			return `
                <p>Déjà inscrit(e) ? - Cliquez <a href="#login">ici</a></p>
            `
		}
	}

	const data = {
		formId: "log-form",
		inputs: [
			{
				id: "email",
				placeholder: "Entrer votre email",
				type: "email"
			},
			{
				id: "password",
				placeholder: "Entrer votre mot de passe",
				type: "password"
			}
		],
		buttons: [
			{
				id: "submit-button",
				bulmaClassNames: "button",
				textContent: "Valider",
				type: "submit"
			},
			{
				id: "reset-button",
				bulmaClassNames: "button",
				textContent: "Réinitialiser",
				type: "reset"
			}
		] as CustomButton[]
	}

	if (!isLoggingIn) {
		data.inputs.push({
			id: "confirmed-password",
			placeholder: "Confirmer votre mot de passe",
			type: "password"
		})
	}

	return `
        <main class="custom-main log__main">
            <section class="log__form-section">
                ${form(data)}
                <aside class="log__question">
                    ${question(isLoggingIn)}
                <aside>
            </section>
        
        </main>
    `
}
