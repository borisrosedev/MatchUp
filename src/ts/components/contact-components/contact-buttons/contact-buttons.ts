import contactButton from "../contact-button/contact-button";

export default function(){
    return`
     <template 
        x-for="(button, index) in $store.contact.form.buttons"
    >
        ${contactButton()}        
     </template>
    
    `
}
