import FormatCheckService from "../../services/format-check-service/format-check-service"
import { OnNavigateType } from "../../types/on-navigate-type"

export default class LogContainer {
	onNavigate: OnNavigateType
	isLoggingIn: boolean
	formatCheckService: FormatCheckService
	constructor(onNavigate: OnNavigateType, isLoggingIn: boolean = true) {
		this.onNavigate = onNavigate
		this.isLoggingIn = isLoggingIn
		const form = document.getElementById("log-form")
		form.addEventListener("submit", this.onSubmit.bind(this))
		this.formatCheckService = new FormatCheckService()
	}

	onSubmit(e: SubmitEvent) {
		e.preventDefault()

		const submitButton = document.getElementById(
			"submit-button"
		) as HTMLButtonElement

		const resetButton = document.getElementById(
			"reset-button"
		) as HTMLButtonElement

		resetButton.disabled = true
		submitButton.disabled = true

		console.log("on submit")
		const emailInputValue = (
			document.getElementById("email") as HTMLInputElement
		).value
		const passwordInputValue = (
			document.getElementById("password") as HTMLInputElement
		).value

		if (!emailInputValue || !passwordInputValue) {
			submitButton.disabled = false
			resetButton.disabled = false
			return
		}

		const isEmailFormatCorrect =
			this.formatCheckService.checkEmail(emailInputValue)

		const isPasswordFormatCorrect =
			this.formatCheckService.checkPassword(passwordInputValue)

		if (isEmailFormatCorrect !== true) {
			document.getElementById("email-error").innerHTML =
				`<small>${isEmailFormatCorrect}</small>`
		} else {
			document.getElementById("email-error").innerHTML = ""
		}

		if (isPasswordFormatCorrect !== true) {
			document.getElementById("password-error").innerHTML =
				`<small>${isPasswordFormatCorrect}</small>`
			submitButton.disabled = false
			resetButton.disabled = false
			return
		}
		if (!this.isLoggingIn) {
			const confirmedPasswordInputValue = (
				document.getElementById("confirmed-password") as HTMLInputElement
			).value

			if (!confirmedPasswordInputValue) {
				submitButton.disabled = false
				resetButton.disabled = false
				return
			}

			if (confirmedPasswordInputValue !== passwordInputValue) {
				document.getElementById("confirmed-password-error").innerHTML =
					`<small>Les mots de passe doivent être identiques</small>`
				submitButton.disabled = false
				resetButton.disabled = false
				return
			}

			document.getElementById("confirmed-password-error").innerHTML = ""
		}

		document.getElementById("password-error").innerHTML = ""

		submitButton.classList.add("is-loading")
	}
}
