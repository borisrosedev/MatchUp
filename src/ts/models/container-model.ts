import { onNavigateType } from "../types/on-navigate.type";
import BusinessLayerModel from "./business-layer-model";

export default class ContainerModel extends BusinessLayerModel {
    onNavigate: onNavigateType
    constructor(onNavitate: onNavigateType){
        super()
        this.onNavigate = onNavitate
    }
}
