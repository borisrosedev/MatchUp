import sealed from "../../decorators/sealed";

@sealed
export default class FormatService {
	constructor() {}

	checkEmailFormat(e: string): string | boolean {
		const pattern = new RegExp(
			/^[a-z0-9._]{2,25}[@]{1}[a-z0-9]{2,8}[.]{1}[a-z]{2,5}$/
		);

		const result = pattern.test(e);

		if (!result) {
			return "Format de l'email incorrect - tous les caractères doivent être écrits en minuscule";
		} else {
			return this.checkEmailFormatHarder(e);
		}
	}

	checkEmailFormatHarder(e: string): string | boolean {
		const beforeAt = e.split("@")[0];
		const afterAt = e.split("@")[1];
		const lastCharOfBeforeAt = beforeAt.charAt(beforeAt.length - 1);

		if (lastCharOfBeforeAt == "." || lastCharOfBeforeAt == "_") {
			return "Format de l'email incorrect - ./_@ à modifier";
		} else {
			return true;
		}
	}

	checkPasswordFormat(p: string): string | boolean {
		const pattern = new RegExp(/^[a-z0-9!?_-ùèéàïû\$]{12,20}$/i);

		const result = pattern.test(p);
		if (!result) {
			return "Format du mot de passe incorrect - Le nombre de caractères doit être en 12 et 20 inclus";
		} else {
			return this.checkPasswordFormatHarder(p);
		}
	}

	checkPasswordFormatHarder(p: string): string | boolean {
		for (const index in p as any) {
			const i = Number(index);
			if (p[i] === p[i].toUpperCase()) {
				return true;
			}

			if (i == p.length - 1) {
				return "Format du mot de passe incorrect - Un minimum d'une majuscule est exigé";
			}
		}
	}
}
