import sealed from "../../decorators/sealed"

@sealed
export default class FormatCheckService {
	constructor() {}

	checkEmail(email: string) {
		const pattern = new RegExp(
			/^[a-z0-9._]{2,20}[@]{1}[a-z0-9]{2,6}[.]{1}[a-z]{2,4}$/
		)
		const result = pattern.test(email)
		if (result) {
			return this.checkEmailHarder(email)
		} else {
			return "email incorrect - tout doit être en minuscule et vous devez respecter la syntaxe d'un email"
		}
	}
	checkEmailHarder(email: string) {
		const splittedEmail = email.split("@")
		const beforeAt = splittedEmail[0]
		const lastCharBeforeAt = beforeAt.charAt(beforeAt.length - 1)
		if (lastCharBeforeAt == "." || lastCharBeforeAt == "_") {
			return "email incorrect ./_@"
		} else {
			return true
		}
	}

	checkPassword(password: string) {
		const pattern = new RegExp(/^[a-z0-9._!?ôïçéùèà]{12,20}$/i)

		const result = pattern.test(password)
		if (result) {
			return this.checkPasswordHarder(password)
		} else {
			return "mot de passe incorrect - taille minimale 12 caractères et maximale 20"
		}
	}

	checkPasswordHarder(password: string) {
		for (const index in password as any) {
			const char = password[index]
			const result = char == (Number(char) as any)
			if (!result) {
				if (Number(index) == password.length - 1) {
					return "mot de passe incorrect - un nombre au moins doit être présent"
				}
			}
		}

		for (const c of password) {
			if (c === c.toUpperCase()) {
				return true
			} else {
				return "mot de passe incorrect - une majuscule au moins doit être présente"
			}
		}
	}
}
