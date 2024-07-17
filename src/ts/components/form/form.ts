import Field from "../../interfaces/field.interface";
import Form from "../../interfaces/form.interface";
import button from "../button/button";
import formField from "../form-field/form-field";

export default function ({ formId, inputs, buttons }: Form): string {
	return `
            <form id="${formId}" class="form">
                <section class="form__fields">
                    ${inputs.map((el: Field) => formField(el)).join("")}
                </section>
                <section class="form__buttons">
                    ${buttons.map((el: any) => button(el)).join("")}
                </section>
            </form>
        `;
}
