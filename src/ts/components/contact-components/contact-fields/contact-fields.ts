import contactButtons from "../contact-buttons/contact-buttons";
import contactField from "../contact-field/contact-field";

export default function () {
	return `
      <template x-for="(field, index) in $store.contact.form.fields" :key="index">
            ${contactField()} 
      </template>  
    
    `;
}
