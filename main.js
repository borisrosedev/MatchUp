
function homePage(){
    return(
        `
            <main>
                <header>
                    <h1>MatchUp</h1>    
                </header>
            </main>
        
        
        `
    )
}


// function MyName(){
//     return(
//         `
//             Cyril
//         `
//     )
// }


window.onload = () => {
    
    window.document.body.innerHTML +=  homePage()

}