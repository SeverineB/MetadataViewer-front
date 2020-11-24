:star: METADATA VIEWER :star:
=======
=============================

### Description

Cette application permet de visualiser les métadonnées d'une image que l'on a téléchargée, après s'être inscrit et connecté.

![](https://github.com/SeverineB/MetadataViewer-front/blob/main/metadata-capture-thumb.png)

### Frameworks & outils utilisés
----------------------------------

* [ReactJS](https://fr.reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-router](https://reactrouter.com/)
* [Sass](https://sass-lang.com/)
* [Axios](https://github.com/axios/axios)
* [Bootstrap](https://react-bootstrap.github.io/)
* [Enzyme](https://www.npmjs.com/package/enzyme)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)

### Installation
----------------

*Ce projet nécessite d'avoir une base de données MongoDB (possibilité d'en créer une avec MongoDB Atlas).*

* Cloner le dépôt (nécessite d'avoir Node installé)
* Installation des dépendances
  - yarn
* Lancement du projet en mode développement
  - yarn start
* Lancement du projet en mode test
  - yarn test (ou yarn test:watch pour lancer les test en continu)
* Lancer l'application dans le navigateur en mode développement
  - http://localhost:8080
* Lancement du projet en mode production
  - yarn build

### Points techniques
---------------------

C'est le premier projet que je développe avec la MERN stack.

Côté client, j'ai dû apprendre à gérer de façon globale les erreurs avec les périmètres d'erreurs (*Errors Boundaries*).

Le state de l'application est géré par **Redux**, j'utilise également des **hooks** dans certains composants, lorsqu'un état local est plus approprié.

Pour le routage de l'application, j'utilise le composant Private Route de React Router qui permet de ne donner accès à certains composants qu'aux utilisateurs connectés.

### Améliorations
-----------------

* Passage en HTTPS (back et front)
* Vérification de l'email à l'inscription

### Backend
-----------

https://github.com/SeverineB/MetadataViewer-back

