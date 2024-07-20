export default function () {
    return `
     <template x-if="field.type == 'textarea'">
                    <textarea 
                        :placeholder="field.placeholder" 
                        :id="field.id"
                    ></textarea>
    </template>
    
    `
}
