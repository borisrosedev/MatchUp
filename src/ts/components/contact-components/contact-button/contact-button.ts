export default function(){
    return `
        <button 
            :id="button.id"
            :type="button.type" class="button" x-text="button.textContent"
        ></button>
    
    `
}
