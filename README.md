# Système d'authentification avec Node.js et Express.js

Ce projet est un exemple simple d'un système d'authentification basé sur les jetons JWT (JSON Web Tokens) avec Node.js et Express.js.

## Fonctionnalités

-   **Authentification des utilisateurs :** Les utilisateurs peuvent s'authentifier en fournissant un nom d'utilisateur et un mot de passe.
-   **Génération de jetons JWT :** Après une authentification réussie, un jeton JWT est généré et renvoyé au client.
-   **Routes protégées :** Utilisation du jeton JWT pour accéder à des routes protégées sur le serveur.

## Installation

1. **Clonage du repository :**

    ```bash
    git clone https://github.com/RemiPHILIPPOT/systeme-authentification.git

    ```

2. **Installation des dépendances :**

npm install

3. **Démarrage du serveur :**

node index.js
Le serveur sera alors accessible à l'adresse http://localhost:3000.

## Utilisation

**Authentification :**

Envoyer une requête POST à http://localhost:3000/login avec le corps suivant :

{
"username": "john",
"password": "password"
}
Utilisation du jeton JWT :

Ajouter le jeton JWT reçu comme en-tête Authorization pour accéder aux routes protégées. Par exemple, pour accéder à la route /protected, envoyez une requête GET à http://localhost:3000/protected avec l'en-tête suivant :

Authorization: Bearer <your-token>
Remplacez <your-token> par le jeton JWT reçu lors de l'authentification.

Routes
POST /login : Authentification de l'utilisateur et génération d'un jeton JWT.
GET /protected : Exemple de route protégée nécessitant un jeton JWT valide.
