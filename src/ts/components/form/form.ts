import Field from "../../interfaces/field.interface"
import button from "../button/button"
import formField from "../form-field/form-field"


interface FormProps {
    formId: string
    inputs: Field[]
    buttons: any[]
}

export default function({ formId, inputs, buttons }: FormProps): string{
    return(
        `
            <form id="${formId}">
                <section class="form__fields">
                    ${inputs.map((el:Field) => formField(el))}
                </section>
                <section class="form__buttons">
                    ${buttons.map((el: any) => button(el))}
                </section>
            </form>
        `
    )
}