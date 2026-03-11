# 🚀 Guide de Déploiement ROMECK - Étape par Étape

## Prérequis
- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)

## Étape 1 : Créer un compte Vercel (2 minutes)

1. Va sur [vercel.com](https://vercel.com)
2. Clique sur "Sign Up"
3. Choisis "Continue with GitHub" (recommandé)
4. Autorise Vercel à accéder à ton GitHub

✅ Compte créé !

## Étape 2 : Préparer le code sur GitHub (5 minutes)

### 2.1 Créer un repository GitHub

1. Va sur [github.com](https://github.com)
2. Clique sur le bouton "+" en haut à droite → "New repository"
3. Nom du repository : `romeck-site`
4. Description : "Site web officiel ROMECK"
5. Choisis "Public" ou "Private" (les deux fonctionnent)
6. **NE COCHE PAS** "Initialize with README"
7. Clique sur "Create repository"

### 2.2 Uploader ton code sur GitHub

**Option A : Via l'interface GitHub (Plus simple)**

1. Sur la page de ton nouveau repository, clique sur "uploading an existing file"
2. Glisse-dépose TOUS les fichiers et dossiers du dossier `romeck-site`
3. Scroll en bas, écris "Initial commit"
4. Clique sur "Commit changes"

**Option B : Via ligne de commande**

```bash
cd /chemin/vers/romeck-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/romeck-site.git
git push -u origin main
```

✅ Code sur GitHub !

## Étape 3 : Déployer sur Vercel (3 minutes)

1. **Retourne sur Vercel** ([vercel.com/dashboard](https://vercel.com/dashboard))

2. **Clique sur "Add New..." → "Project"**

3. **Importer ton repository**
   - Tu verras une liste de tes repositories GitHub
   - Clique sur "Import" à côté de `romeck-site`

4. **Configuration du projet**
   - **Project Name** : `romeck` (important pour avoir romeck.vercel.app)
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `next build` (par défaut)
   - **Output Directory** : `out` (par défaut)
   
5. **Variables d'environnement**
   - Aucune nécessaire pour l'instant
   - Clique sur "Deploy"

6. **Attendre le déploiement**
   - Le build prend ~1-2 minutes
   - Tu verras les logs en temps réel
   - Une fois terminé : "🎉 Congratulations!"

✅ Site en ligne !

## Étape 4 : Configurer le domaine romeck.vercel.app (2 minutes)

1. Sur la page de ton projet, clique sur "Settings" (en haut)

2. Dans la barre latérale, clique sur "Domains"

3. Tu verras ton domaine actuel (probablement `romeck-xxx.vercel.app`)

4. **Ajouter romeck.vercel.app**
   - Clique sur "Add"
   - Entre : `romeck.vercel.app`
   - Si disponible, clique sur "Add"
   - Si déjà pris, essaye : `romeck-apps.vercel.app` ou `romeck-official.vercel.app`

✅ Domaine configuré !

## Étape 5 : Vérifier que tout fonctionne

Visite ton site : `https://romeck.vercel.app` (ou ton domaine)

Vérifie que toutes les pages fonctionnent :
- ✅ Page d'accueil : `/`
- ✅ Confidentialité : `/privacy`
- ✅ CGU : `/terms`
- ✅ Support : `/support`
- ✅ Mentions légales : `/legal`

## 🎯 URLs à utiliser pour Google Play et Apple

Une fois déployé, utilise ces URLs dans tes soumissions :

### Google Play Store
- **Privacy Policy URL** : `https://romeck.vercel.app/privacy`
- **Website** : `https://romeck.vercel.app`

### Apple App Store
- **Privacy Policy URL** : `https://romeck.vercel.app/privacy`
- **Support URL** : `https://romeck.vercel.app/support`

## 🔄 Mettre à jour le site plus tard

Quand tu veux modifier le site :

1. Modifie les fichiers sur GitHub (via l'interface web ou git)
2. Commit les changements
3. Vercel redéploie automatiquement en ~1 minute
4. Ton site est à jour !

## 🆘 Problèmes courants

### Le build échoue
- Vérifie que tous les fichiers sont bien uploadés
- Regarde les logs d'erreur sur Vercel
- Assure-toi que `package.json` est à la racine

### Le domaine romeck.vercel.app est déjà pris
- Essaye `romeck-apps.vercel.app`
- Ou `romeck-official.vercel.app`
- Ou `romeck-mobile.vercel.app`

### Les pages ne s'affichent pas
- Vérifie que le dossier `app` contient bien tous les fichiers
- Force un redéploiement : Deployments → ... → Redeploy

## 📧 Besoin d'aide ?

Si tu bloques à une étape, note :
- À quelle étape tu es bloqué
- Le message d'erreur exact (screenshot si possible)
- Et contacte le support ou demande de l'aide

---

Temps total estimé : **12-15 minutes** ⏱️

Bonne chance ! 🚀
