import BusinessLayerServiceModel from "../../models/business-layer-model";
import LocalStorageService from "../local-storage-service/local-storage.service";
import UsersService from "../users-service/users-service";

export default class AuthService extends BusinessLayerServiceModel {
    usersService: UsersService
    localStorageService: LocalStorageService

    constructor(){
        super()
        this.usersService = new UsersService()
        this.localStorageService = new LocalStorageService()
    }

    async login({email, password}:{ email: string, password: string}){

        const users = await this.usersService.getAllUsers()


        const user = users.find(u => u.email == email)
        if(user){
            if(user.password === password){
                this.localStorageService.setItem("user", { email})
            }
            return user
        } else {
            this.notificationService.content = {
                content: "Erreur de connexion"
            }

            return "Erreur"
        }
    }

    async signup({e, p}:{ e: string, p: string}){

    }

    logout(){

    }

}
