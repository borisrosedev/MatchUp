
# Récupérer ce dossier en local

```bash
    git clone url_du_depot_distant
```


# Marche à suivre
- Installer Git sur votre système afin d'avoir automatiquement git bash
- Installer Node.js (c'est un environnement d'exécution du javascript)

Pour vérifier que git est installé vous allez ouvrir un terminal bash en faisant un clic droit sur le bureau n'importe où et cliquez ensuite sur plus d'options et enfin sur la proposition <font color="red">git bash</font>

Pour vérifier que Node.js et Git sont bien installés ous allez taper la les commandes suivantes dans le git bash
```bash
    git -v
    node -v
```

Si les commandes ci-dessus vous donnent les versions alors cela signifie que les programmes sont bien installés. 

## Création de votre application

Vous allez sur le bureau et vous créez un nouveau dossier qui aura comme nom celui de votre application

```
cd 
cd Desktop
mkidr nom_de_votre_application
```

### Package.json

La première commande à exécuter à la racine de votre application autrement dit dans le dossier même de l'application et non pas dans un dossier enfant c'est :
```bash
npm init -y #npm init --yes

```
Cette commande initialise un package.json qui est un fichier de configuration et de référencement pour votre application. 

Il va référence notamment les dépendances de développement et dépendances dont votre application a besoin afin de fonctionnement correctement :
- soit durant la phase de développement avec les dépendances de développement 
- soit durant la phase de production avec les dépendances tout simplement


## Ajouter les dépendances nécessaires à la qualité de notre application

### Le bundler 

L'idée c'est d'utiliser un logiciel qui permet de transformer une architecture entière de fichier et de dossiers en un gros lot.

Exemple : Vous avez 12 dossiers et 20 fichiers cela va aboutir à créer un dosier unique de 4 fichiers

Donc on minimise la taille de l'application et donc son temps d'exécution

```
    npm install -D webpack webpack-cli webpack-dev-server  
```

### Installer les logiciels qui vont permettre au logiciel webpack de comprendre l'entièrete de notre application
```
    npm install -D sass sass-loader style-loader css-loader
    npm install -D typescript ts-loader 
    npm install -D copy-webpack-plugin html-webpack-plugin
```

### Le linter 

C'est l'idée de faire en sorte que le code que nous écrivons respectera les standards d'écriture du javascript, du typescript ou des tests etc.

```
    npm install -D eslint @typescript-plugin/eslint-plugin @typescript-eslint/parser
```


### Le formatter 

C'est l'idée de faire en sorte que le code que vous écrivez soit lisible sans problème pour un autre développeur.

```
    npm install -D prettier
```

### Le framework de Test 

On va faire des tests pour éviter toute régression 
On va utiliser jest testing-library et cypress
On va avoir besoin également d'un transpiler 

```
    npm install jest @babel/core @babel/preset-env @babel/typescript-preset
```


