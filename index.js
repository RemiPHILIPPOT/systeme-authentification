const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Clé secrète pour la génération des jetons JWT (à remplacer par une valeur sécurisée en production)
const secretKey = "mysecretkey";

// Utilisateur fictif pour démonstration
const fakeUser = {
    id: 1,
    username: "john",
    password: "password",
};

// Route pour l'authentification
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // Vérification des informations d'authentification
    if (username === fakeUser.username && password === fakeUser.password) {
        // Génération du jeton JWT avec l'ID de l'utilisateur
        const token = jwt.sign({ userId: fakeUser.id }, secretKey);
        // Envoi du jeton JWT comme réponse
        res.json({ token });
    } else {
        res.status(401).json({ error: "Identifiants incorrects" });
    }
});

// Middleware pour vérifier les jetons JWT
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Aucun jeton JWT fourni" });
    }
    // Vérification du jeton JWT
    jwt.verify(token, secretKey, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ error: "Jeton JWT invalide" });
        }
        // Ajout de l'ID utilisateur décodé à l'objet de requête
        req.userId = decodedToken.userId;
        next();
    });
};

// Exemple de route protégée nécessitant un jeton JWT valide
app.get("/protected", verifyToken, (req, res) => {
    res.json({
        message: "Route protégée, utilisateur authentifié",
        userId: req.userId,
    });
});

// Port d'écoute du serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
