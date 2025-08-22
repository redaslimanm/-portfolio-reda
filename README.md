# Portfolio Reda - Développeur & Programmeur

Un portfolio moderne et professionnel créé avec React et Node.js, présentant mes compétences, projets et expériences en développement web.

## 🚀 Fonctionnalités

- **Design moderne** : Interface utilisateur élégante avec animations fluides
- **Responsive** : Optimisé pour tous les appareils (desktop, tablette, mobile)
- **Animations** : Transitions et animations avec Framer Motion
- **Formulaire de contact** : Envoi d'emails via l'API backend
- **Navigation fluide** : Défilement doux entre les sections
- **Performance optimisée** : Chargement rapide et SEO-friendly

## 🛠️ Technologies utilisées

### Frontend
- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Styled Components** - CSS-in-JS pour le styling
- **Framer Motion** - Animations et transitions
- **React Icons** - Icônes vectorielles
- **React Router** - Navigation côté client

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Nodemailer** - Envoi d'emails
- **CORS** - Gestion des requêtes cross-origin
- **Helmet** - Sécurité des en-têtes HTTP

## 📦 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone <votre-repo-url>
   cd portfolio-reda
   ```

2. **Installer toutes les dépendances**
   ```bash
   npm run install-all
   ```

3. **Configuration des variables d'environnement**
   ```bash
   # Copier le fichier d'exemple
   cp server/env.example server/.env
   
   # Éditer le fichier .env avec vos informations
   nano server/.env
   ```

4. **Configuration email (optionnel)**
   Pour activer l'envoi d'emails via le formulaire de contact :
   - Créez un compte Gmail
   - Activez l'authentification à deux facteurs
   - Générez un mot de passe d'application
   - Ajoutez vos identifiants dans `server/.env`

## 🚀 Démarrage

### Mode développement
```bash
# Démarrer le serveur et le client en parallèle
npm run dev
```

### Mode production
```bash
# Construire l'application React
npm run build

# Démarrer le serveur de production
npm run server
```

## 📁 Structure du projet

```
portfolio-reda/
├── client/                 # Application React
│   ├── public/            # Fichiers publics
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── App.js         # Composant principal
│   │   └── index.js       # Point d'entrée
│   └── package.json
├── server/                # API Node.js
│   ├── index.js          # Serveur Express
│   ├── env.example       # Variables d'environnement
│   └── package.json
├── package.json          # Scripts principaux
└── README.md
```

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Données du profil** : Éditez `server/index.js` dans la route `/api/profile`
2. **Informations de contact** : Modifiez les liens dans les composants
3. **Projets** : Ajoutez vos projets dans la section projets
4. **Expériences** : Mettez à jour votre parcours professionnel

### Personnaliser le design

1. **Couleurs** : Modifiez les variables de couleur dans `client/src/index.css`
2. **Typographie** : Changez la police dans `client/public/index.html`
3. **Animations** : Ajustez les animations dans les composants

## 📧 Configuration email

Pour activer l'envoi d'emails :

1. Créez un fichier `.env` dans le dossier `server/`
2. Ajoutez vos identifiants Gmail :
   ```
   EMAIL_USER=votre-email@gmail.com
   EMAIL_PASS=votre-mot-de-passe-app
   ```

## 🌐 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Netlify
1. Construisez l'application : `npm run build`
2. Uploadez le dossier `client/build/`

### Heroku
1. Ajoutez un `Procfile` dans la racine
2. Configurez les variables d'environnement
3. Déployez avec Git

## 🔧 Scripts disponibles

- `npm run dev` - Démarre le serveur et le client en mode développement
- `npm run server` - Démarre uniquement le serveur backend
- `npm run client` - Démarre uniquement l'application React
- `npm run build` - Construit l'application pour la production
- `npm run install-all` - Installe toutes les dépendances

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- **Desktop** : 1200px et plus
- **Tablette** : 768px - 1199px
- **Mobile** : Moins de 768px

## 🎯 SEO

Le portfolio inclut :
- Meta tags optimisés
- Structure HTML sémantique
- Images optimisées
- Performance optimisée

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : reda@example.com
- **GitHub** : [github.com/reda](https://github.com/reda)
- **LinkedIn** : [linkedin.com/in/reda](https://linkedin.com/in/reda)

---

Fait avec ❤️ en React & Node.js
