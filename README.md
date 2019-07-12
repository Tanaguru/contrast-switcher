# <i>Switcher</i> de couleurs pour une version contrastée
Mini-site exemple pour un <i>switcher</i> de couleurs (commutateur de style), mécanisme permettant d'obtenir des couleurs suffisamment contrastées pour respecter les règles d'accessibilité et permettre à tout le monde de lire le contenu.

- Lire l'article complet à ce sujet sur le blog de Tanaguru : « [Contrastes de couleurs de texte (partie 3) : le mécanisme d’amélioration des contrastes](https://www.tanaguru.com/fr/contrastes-couleurs-mecanisme-amelioration/) »
- Page de [démonstration de deux exemples de mécanisme d’amélioration des contrastes de couleurs](http://demo-contrast-switcher.tanaguru.com/)

# Lancer le projet
Synchroniser en amont le dossier avec Git

## Afficher le projet
Lancer simplement la page index.html

## Modifier le projet
Pré-requis : installer le plugin [EditorConfig](https://editorconfig.org/#download) qui va bien pour son éditeur de code pour éviter les problèmes d'indentation

### Modifier le style CSS (Sass) du projet

#### Première installation
1. Pré-requis : avoir [NodeJS avec NPM](https://nodejs.org/en/download/) (version LTS et non pas Current)
1. Dans l'explorateur du système d'exploitation, se placer dans le dossier contenant le projet et ouvrir une invite de commandes
1. Lancer l'installation des modules via la commande `npm install`

#### Lancer la compilation
Lancer la compilation Sass (autopréfixage CSS + <i>watch</i>) via la commande `npm run dev`
