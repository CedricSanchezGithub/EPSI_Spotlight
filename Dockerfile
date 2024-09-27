# Utilise l'image officielle de Node.js basée sur Alpine Linux
FROM node:20-alpine

# Auteur de l'image Docker
LABEL authors="groupe 25"

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY epsi_spotlight/package*.json ./

# Installer les dépendances Node.js spécifiées dans package.json
RUN npm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY epsi_spotlight .

# Construire l'application Vite pour la production
RUN npm run build || true

# Exposer le port sur lequel l'application Vite va tourner
EXPOSE 3030

# Commande par défaut pour démarrer l'application Vite en mode production
CMD ["npm", "run", "preview"]