import AuthService from "../../services/auth-service/auth.service";
import { OnNavigateType } from "../../types/on-navigate.type";

export default class LogoutContainer {
    onNavigate: OnNavigateType
    authService: AuthService
    constructor(onNavigate: OnNavigateType){
        this.onNavigate = onNavigate
        this.authService = new AuthService()

        this.authService.logout()
        setTimeout(() => {
            console.log('into')
            this.onNavigate("")
        }, 3000)
    }

    
}
