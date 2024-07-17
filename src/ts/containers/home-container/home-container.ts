import ContainerModel from "../../models/container-model"
import { onNavigateType } from "../../types/on-navigate.type"

export default class HomeContainer extends ContainerModel {
    constructor(onNavigate: onNavigateType){
        super(onNavigate)
    }
}
