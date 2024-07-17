export default function(d: any){
    return(
        `
            <small class="small ${d.classNames ? d.classNames  : ""}">${d.textContent}</smail>
        
        `
    )
}
