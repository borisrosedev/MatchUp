import Field from "../../interfaces/field.interface";
export default function (d: Field): string {

    let autocompleteValue = "on";
    if (d.type == "email") {
        autocompleteValue = "email";
    } else if (d.type == "password") {
        autocompleteValue = "current-password";
    } else {
        autocompleteValue = "off"
    }

	return `
            <article 
                class="form-field ${d.classNames ? d.classNames : ""}"
            >
                <label for="${d.id}"></label>
                <input 
                    id="${d.id}" 
                    name="${d.id}"
                    type="${d.type ? d.type : "text"}"
                    placeholder="${d.placeholder}"
                    autocomplete="${autocompleteValue}"
                />
                <section class="error" id="${d.id}-error"></section>
            </article>
        
        `;
}
