# --------- Stage 1: Build the NestJS application ---------
FROM node:18-alpine AS build

WORKDIR /app

# Copiar dependencias y lock file
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Instalar NestJS CLI (necesario para 'nest build')
RUN npm install -g @nestjs/cli

# Copiar el resto del código fuente
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# Compilar la aplicación
RUN nest build


# --------- Stage 2: Run the production application ---------
FROM node:18-alpine AS production

WORKDIR /app

# Copiar solo lo necesario
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY package.json ./

# Exponer puerto
EXPOSE 3000

# Comando final
CMD ["npm", "run", "start:prod"]
