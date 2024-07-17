import small from "../../components/small/small"

export default class NotificationService {
    private _content: string
    constructor(){}

    set content(val: any){
        this._content = val.content
        console.log('this._content', this._content)
        const notificationAside = document.getElementById('notification-aside')
        notificationAside.innerHTML = small({ textContent: this._content})
        setTimeout(() => {
            console.log(this._content)
            notificationAside.innerHTML = ""
        }, 3000)
    }
}
