# --- Stage 1: Build ---
FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# 1. Dichiariamo l'ARGomento che passeremo da terminale
ARG VITE_API_URL

# 2. Impostiamo la variabile d'ambiente per farla leggere a Vite durante la build
ENV VITE_API_URL=$VITE_API_URL

# Ora Vite può leggere la variabile mentre compila i file statici
RUN npm run build

# --- Stage 2: Production ---
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx di default ascolta sulla porta 80 dentro il container.
# È meglio esporre la 80 qui e mappare la porta esterna quando lanci il container.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]