import form from "../../components/form/form";
import navQuestion from "../../components/nav-question/nav-question";
import Field from "../../interfaces/field.interface";
import Form from "../../interfaces/form.interface";
import NavQuestion from "../../interfaces/nav-question.interface";

function logView(isLoggingIn: boolean) {
	const formData: Form = {
		formId: "log-form",
		inputs: [
			{
				id: "email",
				placeholder: "Entrer votre email",
				type: "email",
				classNames: "log-form__field"
			},
			{
				id: "password",
				placeholder: "Entrer votre mot de passe",
				type: "password",
				classNames: "log-form__field"
			}
		],
		buttons: [
			{
				classNames: "submit-button",
				type: "submit",
				id: "submit-button",
				textContent: "Valider"
			},
			{
				type: "reset",
				classNames: "reset-button",
				id: "reset-button",
				textContent: "Réinitialiser"
			}
		]
	};

	const navQuestionData: NavQuestion = {
		questionContent: "Pas encore inscrit(e)",
		clickInvitation: "Cliquez",
		href: "#register",
		anchorContent: "ici"
	};

	if (isLoggingIn == false) {
		formData.inputs.push({
			id: "confirmed-password",
			placeholder: "Confirmer votre mot de passe",
			type: "password",
			classNames: "log-form__field"
		});

		navQuestionData.questionContent = "Déjà inscrit(e) ?";
		navQuestionData.href = "#login";
	}

	return `
            <main class="main log__main">
                <section>
                    ${form(formData)}
                    ${navQuestion(navQuestionData)}
                </section>
                
            </main>
        
        `;
}

export default logView;
