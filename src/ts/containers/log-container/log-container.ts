import form from "../../components/form/form";
import small from "../../components/small/small";
import ContainerModel from "../../models/container-model";
import AuthService from "../../services/auth-service/auth.service";
import FormatService from "../../services/format-service/format-service";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class LogContainer extends ContainerModel {
	authService: AuthService;
	isLoggingIn: boolean;
	formatService: FormatService;
	confirmedPasswordInput: HTMLInputElement;
	passwordInput: HTMLInputElement;
	emailInput: HTMLInputElement;
	emailErrorSection: HTMLElement;
	passwordErrorSection: HTMLElement;
	confirmedPasswordErrorSection: HTMLElement;
	submitButton: HTMLButtonElement;
	resetButton: HTMLButtonElement;

	constructor(onNavigate: OnNavigateType, isLoggingIn: boolean) {
		super(onNavigate);
		this.formatService = new FormatService();
		this.isLoggingIn = isLoggingIn;
		this.authService = new AuthService();
		this.notificationService.content = {
			content: this.isLoggingIn ? "Page de connexion" : "Page d'inscription"
		};

		const logForm = document.getElementById("log-form");

		logForm.addEventListener("submit", e => this.onSubmit(e));

		this.emailInput = document.getElementById("email") as HTMLInputElement;
		this.emailErrorSection = document.getElementById("email-error");

		this.passwordInput = document.getElementById(
			"password"
		) as HTMLInputElement;
		this.passwordErrorSection = document.getElementById("password-error");

		this.submitButton = document.getElementById(
			"submit-button"
		) as HTMLButtonElement;
		this.resetButton = document.getElementById(
			"reset-button"
		) as HTMLButtonElement;

		if (!this.isLoggingIn) {
			this.confirmedPasswordInput = document.getElementById(
				"confirmed-password"
			) as HTMLInputElement;
			this.confirmedPasswordErrorSection = document.getElementById(
				"confirmed-password-error"
			);
		}
	}

	disableOrEnableButtons(disableButton: boolean = true) {
		this.submitButton.disabled = disableButton;
		this.resetButton.disabled = disableButton;
	}

	async onLoginSubmit(emailValue: string, passwordValue: string) {
		const loginCheckResults = {} as any;
		const emailFormatResult = this.formatService.checkEmailFormat(emailValue);

		if (emailFormatResult !== true) {
			this.emailErrorSection.innerHTML = small({
				textContent: emailFormatResult
			});
			this.disableOrEnableButtons(false);
			return;
		}

		const passwordFormResult =
			this.formatService.checkPasswordFormat(passwordValue);

		if (passwordFormResult !== true) {
			this.passwordErrorSection.innerHTML = small({
				textContent: passwordFormResult
			});
			this.disableOrEnableButtons(false);
			return;
		}

		this.submitButton.classList.add("is-loading");

		const credentials = {
			email: emailValue,
			password: passwordValue
		};

		const user = await this.authService.login(credentials);

		console.log("user", user);
		if (typeof user !== "string") {
			this.onNavigate("#dashboard");
		} else {
			this.disableOrEnableButtons(false);
			this.submitButton.classList.remove("is-loading");
		}
	}

	onRegisterSubmit(
		emailValue: string,
		passwordValue: string,
		confirmedPasswordValue: string
	) {}

	onSubmit(e: any) {
		e.preventDefault();
		const emailValue = this.emailInput.value;
		const passwordValue = this.passwordInput.value;
		this.disableOrEnableButtons();

		if (!emailValue) {
			this.emailErrorSection.innerHTML = small({
				textContent: "Veuiller rentrer un email"
			});
			this.disableOrEnableButtons(false);
		}

		if (!passwordValue) {
			small({
				textContent: "Veuiller rentrer un mot de passe"
			});
			this.disableOrEnableButtons(false);
		}

		if (this.isLoggingIn) {
			this.onLoginSubmit(emailValue, passwordValue);
		} else {
			const confirmedPasswordValue = this.confirmedPasswordInput.value;

			if (!confirmedPasswordValue) {
				small({
					textContent: "Veuiller confirmed le mot de passe"
				});
				this.disableOrEnableButtons(false);
				return;
			}

			this.onRegisterSubmit(emailValue, passwordValue, confirmedPasswordValue);
		}
		// on vérifie dans quelle situation on est : inscription ou connexion
	}
}
