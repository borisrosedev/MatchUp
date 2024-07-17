import form from "../../components/form/form";
import small from "../../components/small/small";
import ContainerModel from "../../models/container-model";
import AuthService from "../../services/auth-service/auth.service";
import { onNavigateType } from "../../types/on-navigate.type";

export default class LogContainer extends ContainerModel {
    authService: AuthService
    isLoggingIn: boolean
    constructor(onNavigate: onNavigateType, isLoggingIn: boolean){
        super(onNavigate)
        this.isLoggingIn = isLoggingIn
        this.authService = new AuthService()
        this.notificationService.content = {
            content: this.isLoggingIn ? "Page de connexion" : "Page d'inscription"
        }

        const logForm = document.getElementById("log-form")

        logForm.addEventListener('submit', (e) => this.onSubmit(e))

    
    }

    disableOrEnableButtons(disableButton: boolean = true){
        const submitButton = document.getElementById('submit-button') as HTMLButtonElement
        const resetButton = document.getElementById('reset-button') as HTMLButtonElement
        submitButton.disabled = disableButton
        resetButton.disabled = disableButton
    }

    onSubmit(e: any){
        e.preventDefault()
        this.consoleService.sendUniqueMessage("Entrer")
        this.disableOrEnableButtons()

        const submitButton = document.getElementById("submit-button")

        const passwordErrorSection = document.getElementById('password-error')

        const emailErrorSection = document.getElementById('email-error')

        const emailInput = document.getElementById('email') as HTMLInputElement
        const emailInputValue = emailInput.value
        if(!emailInputValue){
            
            emailErrorSection.innerHTML = small({ textContent: "Vous devez mettre un email"})
            this.disableOrEnableButtons(false)
        } else {
            emailErrorSection.innerHTML = ""
        }


        const passwordInput = document.getElementById('password') as HTMLInputElement
        const passwordInputValue = passwordInput.value
        if(!passwordInputValue) {
            passwordErrorSection.innerHTML = small({textContent: "Vous devez mettre un mot de passe"})
            this.disableOrEnableButtons(false)
            if(!this.isLoggingIn){
                return
            } 
        }  else {
            passwordErrorSection.innerHTML = ""
            this.notificationService.content = {
                content: "Connexion en cours"
            }
            submitButton.classList.add("is-loading")
            
            
        }

        if(this.isLoggingIn){
            if(!emailInputValue && !passwordInputValue){
                this.notificationService.content = {
                    content: "Veuillez remplir le formulaire de connexion"
                } 
            }
        } 

        if(!this.isLoggingIn){

            
            const confirmedPasswordErrorSection = document.getElementById('confirmed-password-error')

            const confirmedPasswordInput = document.getElementById('confirmed-password') as HTMLInputElement

            const confirmedPasswordInputValue = confirmedPasswordInput.value


            if(!emailInputValue && !passwordInputValue && !confirmedPasswordInputValue){
                this.notificationService.content = {
                    content: "Veuillez remplir le formulaire de d'inscription"
                } 
            }

           

            if(!confirmedPasswordInputValue){
                confirmedPasswordErrorSection.innerHTML = small({ textContent: "Vous devez confirmer le mot de passe"})
                this.disableOrEnableButtons(false)
            }

          

            if(!(confirmedPasswordInputValue == passwordInputValue)){
                confirmedPasswordErrorSection.innerHTML = small({ textContent: "Les mots de passe ne sont pas identiques" })
                this.disableOrEnableButtons()
                return
            } else {
                this.notificationService.content = {
                    content: "Inscription en cours"
                }

                submitButton.classList.add("is-loading")
            }

        }

    }
}
