export default function () {
    console.log('input created')
    return `
        <template x-if="field.type !== 'textarea'">
                    <article class="article-input">
                        <label :for="field.id"></label>
                        <input 
                            :placeholder="field.placeholder"
                            :id="field.id"
                            :type="field.type" 
                        />
                    </article>
        </template>
    
    `
}
