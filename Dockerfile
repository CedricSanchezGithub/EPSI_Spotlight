# Utilise l'image officielle de Node.js pour l'architecture arm64v8 basée sur Alpine Linux
FROM node:18-alpine AS runner

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

# Construire l'application Next.js pour la production
RUN npm run build

# Exposer le port 3000 sur lequel l'application Next.js va tourner
EXPOSE 3030

# Commande par défaut pour démarrer l'application Next.js
CMD ["npm", "start"]