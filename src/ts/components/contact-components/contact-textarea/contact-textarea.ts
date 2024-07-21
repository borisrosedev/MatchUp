export default function () {
    return `
     <template x-if="field.type == 'textarea'">
        <article :id="field.id">
            <label :for="field.id"></label>
            <textarea 
                :placeholder="field.placeholder" 
                :id="field.id"
            ></textarea>
        </article>
    </template>
    
    `
}
