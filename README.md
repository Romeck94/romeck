# ROMECK - Site Web Officiel

Site web officiel de ROMECK pour la vérification des applications sur Google Play et Apple App Store.

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel (Recommandé)

1. **Créer un compte Vercel**
   - Va sur [vercel.com](https://vercel.com)
   - Inscris-toi avec ton email ou GitHub

2. **Préparer le code**
   ```bash
   # Initialise Git dans le dossier romeck-site
   cd romeck-site
   git init
   git add .
   git commit -m "Initial commit - ROMECK website"
   ```

3. **Push sur GitHub**
   - Crée un nouveau repository sur GitHub
   - Push ton code :
   ```bash
   git remote add origin https://github.com/TON-USERNAME/romeck-site.git
   git branch -M main
   git push -u origin main
   ```

4. **Déployer sur Vercel**
   - Sur Vercel, clique sur "New Project"
   - Importe ton repository GitHub
   - Vercel détectera automatiquement Next.js
   - Clique sur "Deploy"
   - ✨ Ton site sera en ligne en ~2 minutes !

5. **Configurer le domaine romeck.vercel.app**
   - Une fois déployé, va dans Project Settings
   - Dans l'onglet "Domains"
   - Ton domaine par défaut sera quelque chose comme `romeck-site-xxx.vercel.app`
   - Change-le en `romeck.vercel.app` (si disponible)

### Méthode 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier romeck-site
cd romeck-site

# Déployer
vercel

# Suivre les instructions
# - Set up and deploy? Y
# - Which scope? Ton compte
# - Link to existing project? N
# - Project name: romeck-site
# - Directory: ./
# - Override settings? N

# Production
vercel --prod
```

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 📄 Pages du site

- **/** - Page d'accueil
- **/privacy** - Politique de confidentialité (RGPD)
- **/terms** - Conditions générales d'utilisation
- **/support** - Support et FAQ
- **/legal** - Mentions légales

## 🔧 Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Hébergement : Vercel

## 📝 Modifications futures

Pour mettre à jour le site :

1. Modifie les fichiers nécessaires
2. Commit et push sur GitHub
3. Vercel redéploie automatiquement

## 🎯 Utilisation pour les stores

Ce site satisfait les exigences de :
- ✅ Google Play Store (Privacy Policy, Support URL)
- ✅ Apple App Store (Privacy Policy, Support URL)

URLs à utiliser :
- Privacy Policy: `https://romeck.vercel.app/privacy`
- Support URL: `https://romeck.vercel.app/support`
- Terms of Use: `https://romeck.vercel.app/terms`

## 📧 Contact

100questionsvie@gmail.com

---

© 2025 ROMECK. Tous droits réservés.
