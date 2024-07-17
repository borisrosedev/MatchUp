export class HomeContainer {

    constructor(){
        const homeLoginButton = document.getElementById('home-login-button')

        homeLoginButton.addEventListener('click', this.onClick)

    }

    onClick(){
        window.location.hash = "#login"
    }

}