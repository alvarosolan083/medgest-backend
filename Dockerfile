# Dockerfile

# Stage 1: Build the NestJS application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# ******* NUEVO PASO: Instalar NestJS CLI globalmente en la etapa de build *******
RUN npm install -g @nestjs/cli

# Copy the rest of the application source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the NestJS application (now 'nest' should definitely be found)
RUN nest build


# Stage 2: Run the production application
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY package.json ./

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]