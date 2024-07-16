```javascript
// ce qui est avant un point est nécessaire un objet
            // et ce qui est après et qui est lui-même suivi de parenthèses est ce que l'on appelle une méthode de cet objet
            // donc log est une méthode de l'objet console
            console.log('🟢') // string
            console.log('Dev Message') // Chaîne de caractères

            // une définition de variable
            // le nom de ma variable c'est maPremiereVariable
            // la valeur de ma variable c'est "Oriane-Cyril-Lina"
            // l'opération s'appelle une affectation ou une assignation
    
            // un littéral de tableau
            const mangoClients = [
               {
                    id: 1,
                    name: 'Oriane'

               },
               {
                    id: 2,
                    name: 'Lina'
               },
               {
                    id:3,
                    name: 'Cyril'
               }
            ]

            // length est une propriété de l'objet arr et NON PAS une méthode car il manque les parenthèses
           console.log(mangoClients[1].id)

               
           const newUser = {
                id: 4,
                name: 'Boris'
           }
          

            mangoClients.push(newUser)
            mangoClients.pop()

            console.log(mangoClients)

            const samuel = {
                id: 5,
                name: 'Samuel'
            }


            const laura = {
                id: 9,
                firstname: 'Mathilde'
            }

            mangoClients.push(samuel, laura)
            console.log(mangoClients)
```