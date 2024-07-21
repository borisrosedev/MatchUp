import Alpine from 'alpinejs';
import { OnNavigateType } from "../../types/on-navigate.type";
import contactView from '../../views/contact-view/contact-view';

export default class ContactContainer {
    Alpine: any;
    onNavigate: OnNavigateType;

    constructor(onNavigate: OnNavigateType, Alpine: any) {
        this.onNavigate = onNavigate;
        this.Alpine = Alpine;

        this.initializeAlpine().then(() => {
            this.initializeStore();
        }).catch(error => {
            console.error('Failed to initialize Alpine:', error);
        });
    }
    initializeAlpine(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                document.addEventListener('alpine:init', () => {
                    console.log('🔫 alpine init')
                    this.Alpine.data('contact', () => ({
                        init(){
                            console.log('contact-data initialized')
                        },
                        submitContactForm(){
                            alert('submitted')
                        }
                    }))
                })
                this.Alpine.start();
                console.log('✅ Alpine initialized');
             
          
                
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

 

    // Fonction pour initialiser le store
    initializeStore() {
        try {
            this.Alpine.store('contact', {
                test: 'Le test',
                form: {  
                   fields:  [
                        {
                            type: 'email',
                            id: 'email',
                            placeholder: 'Entrer votre email',
                            value: ''
                        },
                        {
                            type: 'textarea',
                            id: 'content',
                            placeholder: 'Entrer le contenu de votre message',
                            value: ''
                        }
                    ],
                    buttons : [
                        {
                            id: 'submit-button',
                            type: 'submit',
                            textContent: 'Envoyer'
                        },
                        {
                            id: 'reset-button',
                            type: 'reset',
                            textContent: 'Réinitialiser'
                        }
                    ]
                }
        });

            console.log('🛍️ Contact store initialized:', this.Alpine.store('contact'));

            this.initializeView()
        } catch (error) {
            console.error('Error initializing store:', error);
        }
    }

    initializeView(){
        const root = document.getElementById('root') as HTMLElement
        root.innerHTML += contactView()
    }
}


