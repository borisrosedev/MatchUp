import LocalStorageService from "../local-storage-service/local-storage.service"

export default class UsersService {
    localStorageService: LocalStorageService

    constructor(){
        this.localStorageService = new LocalStorageService()
    }
    async getAllUsers(){
        
        const users = []
    
        const malePretenders = await this.getAllMaleUsers()
        if(malePretenders){
            users.push(...malePretenders)
        }
  
        const femalePretenders = await this.getAllFemaleUsers()
        if(femalePretenders){
            users.push(...femalePretenders)
        }
    
      
        console.log('Users', users)
        return users




    }

    async getUserByEmail(e: string){
        const users = await this.getAllUsers()
        const user = users.find((u) => u.email === e)
        if(user){
            const safeUser = {
                ...user,
                password: null
            }
            this.localStorageService.setItem('user', safeUser)  
        } else {
            return "bad request"
        }
    }
    async getAllMaleUsers(){
    
        try {
            const maleResult = await fetch('/data/male-pretenders.json')
            const malePretenders = await maleResult.json()
            return malePretenders
        }catch(err){
            console.log('Erreur lors de la récupération des utilisateur', err) 
        }
  

     
    
    }


    async getAllFemaleUsers(){

        try {
            const femaleResult = await fetch('/data/female-pretenders.json')
            const femalePretenders = await femaleResult.json()
            return femalePretenders
        } catch(err){
            console.log('Erreur lors de la récupération des utilisatrices', err)
        }
    }
}
