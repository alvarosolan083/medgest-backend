# --------- Stage 1: Build the NestJS application ---------
FROM node:18-alpine AS build

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm ci

# Instalar NestJS CLI globalmente para el build
RUN npm install -g @nestjs/cli

# Copiar todo el código fuente
COPY . .

# Compilar la aplicación
RUN npm run build


# --------- Stage 2: Run the compiled application ---------
FROM node:18-alpine AS production

WORKDIR /app

# Copiar los archivos necesarios desde la etapa anterior
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

# Puerto expuesto
EXPOSE 3000

# Comando de arranque
CMD ["node", "dist/main"]
