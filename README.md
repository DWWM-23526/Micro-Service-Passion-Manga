# Micro-Service-Passion-Manga
Ce projet est un microservice en Node.js, utilisant Express, destiné à gérer les opérations CRUD (Création, Lecture, Mise à jour, Suppression) pour des images. Ces images seront utilisées pour le projet Passion Manga. Le microservice utilise MongoDB Atlas pour la gestion des données et Multer pour l'upload des images.

### Fonctionnalités

* Créer une image : Télécharger et stocker une image sur le serveur, avec ses métadonnées dans MongoDB.

* Lire toutes les images : Récupérer la liste de toutes les images stockées.

* Lire une image spécifique : Récupérer les informations d'une image spécifique à partir de son ID.

* Mettre à jour une image : Modifier les informations d'une image existante.
Supprimer une image : Supprimer une image du serveur et de la base de données.

### Prérequis

* Node.JS (v14 ou supérieur)
* MongoDB Atlas (ou une autre instance MongoDB)

### Installation

### Étape 1: Cloner le dépôt

```
git clone https://github.com/DWWM-23526/Micro-Service-Passion-Manga.git
```

```
cd Micro-Service-Passion-Manga
```
### Étape 2: Installer les dépendances

Assurez-vous d'avoir Node d'installé, puis exécutez la commande suivante pour installer les dépendances du projet :

```
npm install
```

### Étape 3: Configurer les variables d'environnement

Créez un fichier .env à la racine du projet et ajoutez votre URI MongoDB Atlas :
```
MONGO_URI=<votre_uri_mongodb_atlas>
```
### Étape 4: Démarrez le serveur
```
nodemon server
```
# Utilisation
### Endpoints

* POST /api/images : Crée une nouvelle image. Utilisez un formulaire multipart/form-data pour envoyer l'image avec le champ image et le titre avec le champ title.

* GET /api/images : Récupère toutes les images.

* GET /api/images/:id : Récupère une image spécifique par son ID.

* PUT /api/images/:id : Met à jour une image existante. Vous pouvez envoyer une nouvelle image et/ou mettre à jour le titre.

* DELETE /api/images/:id : Supprime une image spécifique par son ID.

#

Merci d'utiliser notre micro-service !