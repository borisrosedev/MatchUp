import BusinessLayerServiceModel from "../../models/business-layer-model"

export default class MyLocalStorageService extends BusinessLayerServiceModel { 
    constructor(){
        super()
    }
    getItem(k: string){
        const item = localStorage.getItem(k)
        if(item){
            return JSON.parse(item)
        } else {
            
        }
    }
}
