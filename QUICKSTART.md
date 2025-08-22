# 🚀 Démarrage Rapide - Portfolio Reda

## Installation Express (Windows)

1. **Double-cliquez sur `start.bat`** pour installer toutes les dépendances automatiquement

2. **Ou utilisez les commandes manuelles :**
   ```bash
   # Installer les dépendances principales
   npm install
   
   # Installer les dépendances du serveur
   cd server && npm install && cd ..
   
   # Installer les dépendances du client
   cd client && npm install && cd ..
   ```

## Démarrage de l'application

1. **Double-cliquez sur `run.bat`** pour démarrer l'application

2. **Ou utilisez la commande :**
   ```bash
   npm run dev
   ```

3. **Ouvrez votre navigateur :**
   - Frontend : http://localhost:3000
   - Backend API : http://localhost:5000

## Configuration Email (Optionnel)

1. Créez un fichier `.env` dans le dossier `server/`
2. Ajoutez vos identifiants Gmail :
   ```
   EMAIL_USER=votre-email@gmail.com
   EMAIL_PASS=votre-mot-de-passe-app
   ```

## Personnalisation

1. **Modifiez vos informations** dans `server/index.js`
2. **Changez les liens sociaux** dans les composants
3. **Ajoutez vos projets** dans la section projets
4. **Mettez à jour votre expérience** professionnelle

## Déploiement

- **Vercel** : Connectez votre repo GitHub
- **Netlify** : Uploadez le dossier `client/build/`
- **Heroku** : Utilisez le Procfile fourni

## Support

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est installé (version 14+)
2. Assurez-vous que les ports 3000 et 5000 sont libres
3. Consultez le README.md complet pour plus de détails

---

**Bon développement ! 🎉**
